
import Vue from 'vue'
import App from './App'
import router from './router'
import reset from './style/reset.less'
import iconfont from './assets/font/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
