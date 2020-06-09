import Vue from 'vue/dist/vue.js';

import App from './App.vue'

Vue.config.productionTip = false

// Vue.mixin({
//     beforeCreate(){
//         console.log('vue global mixin beforeCreate')
//     },
//     created() {
//         console.log('vue global mixin created')
//     }
// })
// 1. 工厂
// Vue.component('HelloWorld', (resolve, reject) => {
//     require(['./components/HelloWorld.vue'], (res) => {
//         console.log('async Factory',res.default.render)
//         resolve(res)
//     })
// })
// 2. webpack import:Promise
// Vue.component('HelloWorld', () => import('./components/HelloWorld.vue'))
const LoadingComp = {
    template: '<div>loading</div>'
}
const ErrorComp = {
    template: '<div>error</div>'
}

const AsyncHello = () => ({
    component: import('./components/HelloWorld.vue'),
    loading: LoadingComp,
    error: ErrorComp,
    delay: 200,
    timeout: 1000
})

Vue.component('HelloWorld', AsyncHello)


new Vue({
    render: h => h(App)
}).$mount('[replace]')
