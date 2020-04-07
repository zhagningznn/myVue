import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store' //引入store
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import global from '@/utils/global.js'
import axios from 'axios'
import  Qs from 'qs'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.global = global
Vue.prototype.$http = axios
Vue.prototype.Qs=Qs
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
