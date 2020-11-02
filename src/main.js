import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { rtdbPlugin } from 'vuefire'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faUserSecret, faArrowLeft])

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(rtdbPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
