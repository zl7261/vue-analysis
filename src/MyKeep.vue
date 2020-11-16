<template>
  <div>

    <keep-alive>
      <component :is="currentComp"
      />
    </keep-alive>
    <button @click="changeCache">change cache</button>
  </div>
</template>

<script>
const A = {
  name: 'A',
  render() {
    return (
        <div class="a">
          <p>A Comp</p>
        </div>
    )
  }
}

const B = {
  name: 'B',
  render() {
    return (
        <div class="b">
          <p>B Comp</p>
        </div>
    )
  }

}

export default {
  name: "MyKeep",
  components: {
    A,
    B
  },
  data() {
    return {
      currentComp: 'A'
    }
  },
  methods: {
    changeCache() {
      this.currentComp = this.currentComp === 'A' ? 'B' : 'A'
    }
  }
}
</script>