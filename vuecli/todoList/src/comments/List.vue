<template>
    <ul>
        <li v-for="(item,index) in list" :key="index" @click="del(index)">
            <input type="checkbox" :checked="item.complete" @change="change(index)" @click.stop>
            <span>{{item.msg}}</span>
        </li>
    </ul>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        props:['list'],
        methods:{
            change(index){
                this.$emit("cha",index)
            },
            del(index){
                this.$emit('del',index)
            }
        }
    }
</script>

<style scoped>
ul{
    width: 100%;
    position: absolute;
    top: 50px;
    height: 200px;
    overflow: auto;
}
ul>li{
    width: 100%;
    list-style: none;
    background-color: #fff;
    padding: 5px;
    box-sizing: border-box
}
</style>