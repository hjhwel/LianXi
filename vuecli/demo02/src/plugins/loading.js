// 暴漏出去一个对象
export default {
  // 对象里面有个install 方法可以被vue.use 调用
  install(Vue) {
    let app = new Vue({
      data: {
        msg: "加载中！请稍等...",
        isShow: false,
      },
      template: `
      <div v-show="isShow" style="position:fixed;width:100vw;left:0;top:0;height:100vh;line-height:100vh;text-align:center;background:rgba(0,0,0,0.5)">
{{msg}}</div>`,

    })

    let node = document.createElement("div");
    document.body.appendChild(node);
    app.$mount(node);

    Vue.prototype.$loading = {
      show(a) {
        app.msg = a || "正在加载，请稍等";
        app.isShow = true
      },
      hide() {
        app.isShow = false;
      }
    }
  }
}
