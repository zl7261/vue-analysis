<template>
    <div id="app">
        <strong>{{message}}</strong>
        <HelloWorld/>
        <img src="./assets/logo.png" width="200" height="200" alt="logo">
        <B/>
        <hr>
        <A/>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
// 组件实际加载依赖 跟import的顺序有关系
import A from './components/A'
import B from './components/B'

export default {
    name: 'App',
    components: {HelloWorld, A, B},
    created() {
        // console.log(this._data.message)
    },
    data() {
        return {
            message: 'Hello World!'
        }
    },
    render(createElement) {
        return createElement('div', {
            attrs: {
                id: 'app',
                haha: ''
            },
            class: [
                {'cls1': true},
                {'cls2': false}
            ],
            style: {
                color: 'red'
            }
        }, [this.message])
    }
}
</script>
