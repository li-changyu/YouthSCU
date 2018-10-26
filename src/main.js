// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueMouseParallax from 'vue-mouse-parallax'
// 引入animate动画效果库
// attention：使用animate类名必须带上animated 
import animated from 'animate.css'
import hover from 'hover.css'

// 引入vue-awesome-swiper样式
import 'swiper/dist/css/swiper.css' 

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
Vue.use(animated)
Vue.use(hover)
Vue.use(VueMouseParallax)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
