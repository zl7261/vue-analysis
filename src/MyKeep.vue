<template>
  <div>

    <keep-alive>
      <component :is="cacheComponent[cacheKey]"
      />

    </keep-alive>
    <button @click="changeCache">change cache</button>
  </div>
</template>

<script>
import A1 from '../src/components/keepalive/A1'
import B2 from '../src/components/keepalive/B2'

export default {
  name: "MyKeep",
  data() {
    return {
      cacheKey: 'A',
      cacheComponent: {
        A: A1,
        B: B2
      }
    }
  },
  methods: {
    changeCache() {
      if (this.cacheKey === 'A') {
        this.cacheKey = 'B'
        return
      }

      if (this.cacheKey === 'B') {
        this.cacheKey = 'A'
        return
      }
    }
  }
}
</script>