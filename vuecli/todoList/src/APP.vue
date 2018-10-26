<template>
    <div class="box">
        <Header @addList="shiftItem"></Header>
        <List :list="list" @cha="change" @del="del"></List>
        <Foot :list="list" @all="selectAll" @delAll="list.splice(0,list.length)"></Foot>
    </div>
</template>

<script>
import Header from "./comments/Header";
import List from "./comments/List";
import Foot from "./comments/Foot";
export default {
  data() {
    return {
        list:[
            {
                msg:'吃饭',
                complete:false
            },
            {
                msg:'吃饭',
                complete:true
            },
            {
                msg:'吃饭',
                complete:false
            }
        ]
    };
  },
  components: {
    Header,
    List,
    Foot
  },
  methods:{
      shiftItem(){
          this.list.unshift(arguments[0])
      },
      change(){
          this.list[arguments[0]].complete = !this.list[arguments[0]].complete
      },
      selectAll(){
          this.list.forEach(element=>{
              element.complete = arguments[0]
          })
      },
      del(){
          this.list.splice(arguments[0],1)
      }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.box {
  border: 1px solid #ddd;
  width: 500px;
  height: 300px;
  margin: 20px auto;
  background-color: #dedede;
  position: relative;
}
</style>