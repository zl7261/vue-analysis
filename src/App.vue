<!--<template>-->
<!--    <div id="app">-->
<!--        {{message}}-->
<!--    </div>-->
<!--</template>-->

<script>

export default {
    name: 'App',
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
            attrs:{
                id:'app'
            }
        }, [this.message])
    }
}
</script>
