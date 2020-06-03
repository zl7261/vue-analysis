<template>
    <div>
        {{ text }}
        <div style="border: red solid 1px">

            <A/>
        </div>
    </div>
</template>

<script>
import A from './A.vue'

export default {
    name: "B",
    components: {A},
    beforeCreate(){
        console.log('B beforeCreate')
    },
    created(){
        console.log('B created')
    },
    data() {
        return {
            text: 'B-Component'
        }
    }
}
</script>

<style>

</style>