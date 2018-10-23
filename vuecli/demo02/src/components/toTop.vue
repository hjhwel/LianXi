<template>
  <div @click="goTop" v-show="isShow">
    返回
    <br>
    顶部
  </div>
</template>

<script>
  export default {
    data() {
      return {
        delta: null,
        isShow:false
      }
    },
    methods: {
      goTop() {

        this.delta && window.scrollBy(0, -this.delta / 9.8)
        this.delta && requestAnimationFrame(this.goTop)
      }
    },
    created() {
      window.addEventListener("scroll", () => {
        this.delta = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        this.isShow = this.delta > 100;
      })
    },
  }

</script>

<style scoped>
  div {
    position: fixed;
    width: 50px;
    height: 50px;
    line-height: 24px;
    background-color: #f00;
    bottom: 20px;
    right: 20px;
    text-align: center;
  }

</style>
