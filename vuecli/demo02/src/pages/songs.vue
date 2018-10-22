<template>
  <div>
    <ul class="list">
      <li v-for="(item,index) in songsList" :key="index" @click="player(item)">
        <img :src="item.al.picUrl" alt="">
        <span>歌名：{{item.name}}</span>
        <span class="autor" v-if="item.ar.length<3">歌手：<i v-for="(it,ind) in item.ar" :key="ind">{{it.name}}</i></span>
        <span class="autor" v-if="item.ar.length>=3">歌手：<i>群星合唱</i></span>
        <span>专辑：{{item.al.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        songsList: []
      }
    },
    created() {
      this.$loading.show('正在加载...')
      this.$ajax('http://musicapi.leanapp.cn/artists?id=' + this.id).then((data) => {
        this.songsList = data.hotSongs;
        this.$loading.hide()
      })
      this.$emit("update:title",this.name)
    },
    props:["id","name"],
    methods:{
      player(item){
        this.$router.push('/player/'+item.id+'/'+item.name);
        this.$emit("img",item.al.picUrl)
      }
    }
  }

</script>

<style scoped>
.list li {
  height: 80px;
  margin: 5px 20px;
  border-radius: 5px;
  background-color: #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.list li img {
  width: 80px;
  height: 80px;
  border-radius: 5px;
  vertical-align: middle;
}
.list li>span {
  vertical-align: middle;
  padding-left: 25px;
  width: 260px;
  font-size: 15px;
}
span span{
  color: #666;
  font-size: 14px;
  padding-left: 10px;
}
i{
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
}
</style>
