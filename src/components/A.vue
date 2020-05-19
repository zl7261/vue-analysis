<template>
    <div>
        {{ text }}
        <B/>
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

<style scoped>

</style>