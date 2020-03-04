import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Movie from '@/components/Movie.vue'

Vue.config.productionTip = false

Vue.component('movie', Movie)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
