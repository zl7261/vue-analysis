import Vue from 'vue'
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
    render(){
        let _vm = this
        let _h = _vm.$createElement
        let _c = _vm._self._c || _h
        return _c("div", [_vm._v("Loading")])
    }
}
const ErrorComp = {
    render(){
        let _vm = this
        let _h = _vm.$createElement
        let _c = _vm._self._c || _h
        return _c("div", [_vm._v("Error")])
    }
}

const AsyncHello = () => ({
    component: import('./components/HelloWorld.vue'),
    loading: LoadingComp,
    error: ErrorComp,
    delay: 200,
    timeout: 100
})

Vue.component('HelloWorld', AsyncHello)


new Vue({
    render: h => h(App)
}).$mount('[replace]')
