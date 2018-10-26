// 1.引入vue
import Vue from 'vue'
// 2.引入入口文件App
import App from './APP'

// 创建实例对象
new Vue({
    el:'#app',
    data:{

    },
    // 注册组件
    components:{App},
    // 创建单标签模板
    template:`<App/>`
})