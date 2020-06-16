<template>
    <div id="app">
        <div v-if="flag">
            {{msg}}
        </div>
        <div v-else>
            {{msg1}}
        </div>
        <button @click="change">change</button>
        <button @click="toggle">toggle</button>
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
        <div @click="handleParentClick">
            parent
            <a @click.stop="handleChildClick" href="https://www.baidu.com">
                child
            </a>
        </div>
        <!--        <A/>-->
        <!--        <hr>-->
        <!--        <B/>-->
    </div>
</template>

<script>
    // import HelloWorld from '@/components/HelloWorld'
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
                count: 0,
                flag: true,
                msg: 'WORLD',
                msg1: 'VUE'
            }
        },
        methods: {
            change() {
                this.msg = Math.random()
            },
            toggle() {
                this.flag = !this.flag
            },
            handleParentClick() {
                console.log('parent')
            },
            handleChildClick(event) {
                event.preventDefault()
                console.log('child')
            }
        }
    }
</script>
