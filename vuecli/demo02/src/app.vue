<template>
  <div>
    <header>
      <span class="left" @click="$router.go(-1)" v-show="leftShow">&lt;</span>
      {{title}}
      <span class="right"  @click="$router.go(1)" v-show="rightShow">&gt;</span>
    </header>
    <router-view :title.sync="title" @righ="rightShow=false"></router-view>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        title:"歌手",
        leftShow:false,
        rightShow:false,
      }
    },
    watch:{
      $route(to,from){
        console.log(to,from);
        if(to.path == '/'){
          this.title = "歌手";
          this.leftShow=false;
          this.rightShow = true
        }else{
          this.leftShow=true
          this.rightShow = true
        }
      }
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
header{
  height: 60px;
  background: rgb(126, 6, 6);
  text-align: center;
  line-height: 60px;
  font-size: 24px;
  color: #fff;
}
header span{
  height: 60px;
  width: 120px;
  cursor: pointer;
  color: #dedede;
}
header span:hover{
  background: rgb(172, 4, 4);
}
.left{
  float: left;
}
.right{
  float: right;
}
</style>