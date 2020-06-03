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

new Vue({
    render: h => h(App)
}).$mount('[replace]')
