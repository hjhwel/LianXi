<template>
  <div>
    <ul class="list">
      <li v-for="(item,index) in singerList" :key="index" @click="$router.push('/songs/'+item.id + '/' + item.name)">
        <img :src="item.img1v1Url" alt="">
        <span>{{item.name}}<span v-show="item.alias.length">{{item.alias[0]}}</span></span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        singerList:[]
      }
    },
    created() {
      this.$loading.show('正在加载...')
      this.$ajax('http://musicapi.leanapp.cn/artist/list?cat=1001').then((data) => {
        this.singerList = data.artists;
        this.$loading.hide()
      })
    },
  }
</script>

<style scoped>
.list li {
  height: 80px;
  margin: 5px 20px;
  border-radius: 5px;
  background-color: #e6e6e6;
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
  font-size: 20px;
}
span span{
  color: #666;
  font-size: 14px;
  padding-left: 10px;
}
</style>