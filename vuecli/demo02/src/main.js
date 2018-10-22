// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './app'
import router from './router'
import ajax from './plugins/ajax'
import loading from './plugins/loading'
Vue.use(ajax);
Vue.use(loading);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { app },
  template: '<app/>'
})
