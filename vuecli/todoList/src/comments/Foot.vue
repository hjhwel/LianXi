<template>
    <div class="footer">
        <div>
            <input type="checkbox" :checked="isSelectALL" @change="selectALL">
            <span>已完成{{com}}件/总计{{list.length}}件</span>
        </div>
        <button @click="delAll">清空</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        props:['list'],
        computed:{
            com(){
                let isCom = 0;
                this.list.forEach(element => {
                    if(element.complete){
                        isCom++;
                    }
                });
                return isCom
            },
            isSelectALL(){
                if(this.list.length !==0){
                    return this.com == this.list.length?true:false
                }
            }
        },
        methods:{
            selectALL(){
                console.log(this.isSelectALL);
                this.$emit("all",!this.isSelectALL)
            },
            delAll(){
                this.$emit("delAll")
            }
        }
    }
</script>

<style scoped>
.footer{
    height: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>