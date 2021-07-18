import Vue from 'vue'
import App from './App.vue'
import {useEchartsComponent, onReachBottomNotify} from './plugins'

Vue.config.productionTip = false

Vue.use(useEchartsComponent)
Vue.use(onReachBottomNotify)

new Vue({
  render: h => h(App),
}).$mount('#app')
