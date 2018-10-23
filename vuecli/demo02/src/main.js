// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './app'
import router from './router'
import ajax from './plugins/ajax'
import loading from './plugins/loading'
import toTop from './components/toTop'
import axios from 'axios'
console.log(axios);
Vue.prototype.$axios = axios;
Vue.use(ajax);
Vue.use(loading);
Vue.component('totop',toTop)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { app },
  template: '<app/>'
})
