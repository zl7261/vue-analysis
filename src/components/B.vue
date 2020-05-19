<template>
    <div>
        {{ text }}
        <A/>
    </div>
</template>

<script>
import A from './A.vue'

export default {
    name: "B",
    components: {A},
    data() {
        return {
            text: 'B-Component'
        }
    }
}
</script>

<style scoped>

</style>