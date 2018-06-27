// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Flexible from './assets/js/flexible.js'
import Vue from 'vue'
import App from './App'
import VueLazyload from 'vue-lazyload'




const prevImg="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3e%3ccircle cx='24' cy='24' r='16' opacity='.5' fill='%23ffe500'/%3e%3c/svg%3e"  //由你购预载图://yng001.oss-cn-shanghai.aliyuncs.com/imgs/yngprevload.svg
Vue.use(VueLazyload, {
  preLoad: 2, //proportion of pre-loading height
  loading: prevImg, //预加载的图片  
  observer: true,
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  },
  listenEvents: ['scroll','wheel', 'mousewheel','touchmove']//监听哪些事件 ，支持类型： ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove'] 
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
