<template>
    <div>
        {{ text }}
        <div style="border: red solid 1px">
            <B/>
        </div>
    </div>
</template>

<script>
import B from './B.vue'

export default {
    name: "A",
    components: {B},
    beforeCreate(){
        console.log('A beforeCreate')
    },
    created(){
        console.log('A created')
    },
    data() {
        return {
            text: 'A-Component'
        }
    }
}
</script>

<style>

</style>