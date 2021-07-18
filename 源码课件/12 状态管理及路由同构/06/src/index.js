import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import Home from './Home'
import About from './About'
import App from './App'

Vue.use(Router)
Vue.use(Vuex)

export function createApp() {
    const store = new Vuex.Store({
        state: {
            timestamp: new Date().getTime()
        }
    })
    if (typeof window !== 'undefined' && window.store) {
        store.replaceState(window.store)
    }
    const router = new Router({
        mode: 'history',
        routes: [
            {path: '/', component: Home},
            {path: '/about', component: About},
        ]
    })

    const vm = new Vue({
        router,
        store,
        render: h => h(App)
    })
    return {vm, router, store}
}