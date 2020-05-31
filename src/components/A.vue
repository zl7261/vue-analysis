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
    data() {
        return {
            text: 'A-Component'
        }
    }
}
</script>

<style>

</style>