<template>
    <div id="app">
        <strong :style="{'color':'red'}">
            <strong :style="{'color':'green'}">
            {{message}}
            </strong>
        </strong>
        <strong :style="{'color':'yellow'}">
                {{message}}
        </strong>
        <button @click="count++" id="count">
            click {{ count }} times
        </button>
        <HelloWorld :msg="message"/>
        <img src="./assets/logo.png" width="200" height="200" alt="logo">
        <!--        <A/>-->
        <!--        <hr>-->
        <!--        <B/>-->
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// 组件实际加载依赖 跟import的顺序有关系
// import B from '@/components/B'
// import A from '@/components/A'

export default {
    name: 'App',
    // components: {
    //     HelloWorld,
    //     // A,
    //     // B
    // },
    beforeCreate() {
        console.log('App beforeCreate')
    },
    created() {
        console.log('App created')
    },
    beforeMount() {
        console.log('App beforeMount')
    },
    mounted() {
        console.log('App mounted')
    },
    // vnode数据已更新，尚未渲染到DOM
    beforeUpdate() {
        console.log(document.querySelector('#count').innerHTML)
        console.log('App beforeUpdate, count:', this.count)
    },
    // vnode数据已更新，已渲染到DOM
    updated() {
        console.log(document.querySelector('#count').innerHTML)
        console.log('App update, count:', this.count)
    },
    data() {
        return {
            message: 'Hello World!',
            count: 0
        }
    }
}
</script>
