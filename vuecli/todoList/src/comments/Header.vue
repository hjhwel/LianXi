<template>
    <div>
        <input type="text" placeholder="请输入待办事项" v-model="newItem.msg" @keyup.enter="add">
        <button @click="add">添加</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                newItem:{
                    msg:'',
                    complete:false
                }
            }
        },
        methods:{
            add(){
                if(!this.newItem.msg){
                    return false;
                }
                this.$emit("addList",this.newItem);
                this.newItem = {
                    msg:'',
                    complete:false
                }
            }
        }
    }
</script>

<style scoped>
div{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    height: 50px;
    box-sizing: border-box
}
input{
    width: 80%;
}
button{
    width: 15%;
}
</style>