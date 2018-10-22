<template>
  <div>
    <div class="img" :style="{transform: 'rotate('+degSum+'deg)'}">
      <img :src="musicPic" alt="">
    </div>
    <audio :src="musicUrl" controls @play="rotate" @pause="stopRotate" @ended="degSum=0"></audio>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        musicUrl: '',
        musicPic: '',
        degSum: 0,
        timeOut: ''
      }
    },
    props: ["id", 'name'],
    created() {
      this.$loading.show('正在加载...')
      this.$ajax('http://musicapi.leanapp.cn/music/url?id=' + this.id).then((data) => {
        this.musicUrl = data.data[0].url;
        this.$loading.hide()
      });
      this.$ajax('http://musicapi.leanapp.cn/song/detail?ids=' + this.id).then((data) => {
        this.musicPic = data.songs[0].al.picUrl;
      });

      this.$emit("update:title", this.name)
    },
    methods: {
      rotate() {
        clearTimeout(this.timeOut)
        this.timeOut = setTimeout(() => {
          this.degSum += 0.1
          if (this.degSum > 360) {
            this.degSum = 0
          }
          this.rotate()
        }, 16.7);
      },
      stopRotate() {
        clearTimeout(this.timeOut)
      }
    }
  }

</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  audio {
    position: fixed;
    bottom: 10px;
    left: 0;
    right: 0;
    width: 100%;
  }

  div {
    position: absolute;
    top: 60px;
    bottom: 0;
    left: 0;
    right: 0;
    background: #585252;
    overflow: hidden;
  }

  .img {
    display: block;
    width: 600px;
    height: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -320px 0 0 -320px;
    border-radius: 50%;
    border: 20px solid rgb(100, 100, 100, 0.5);
    overflow: hidden;
    transform: rotate(0deg);
  }

  img {
    border-radius: 50%;
    border: 50px solid #222;
    width: 500px;
    height: 500px;
  }

</style>
