// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import reset from './assets/css/reset.css'
import 'swiper/dist/css/swiper.css'
import echarts from 'echarts'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.crossDomain = true
Vue.prototype.$axios = axios

Vue.prototype.$echarts = echarts

Vue.use(reset)
Vue.use(MintUI)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
