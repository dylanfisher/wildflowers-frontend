<template>
  <div class="hello">
    <drawing-canvas/>
  </div>
</template>

<script>
import DrawingCanvas from './DrawingCanvas.vue'

export default {
  name: 'Home',
  components: {
    DrawingCanvas
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
