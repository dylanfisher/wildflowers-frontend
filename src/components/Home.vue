<template>
  <div>
    <drawing-canvas/>
    <drawings/>
  </div>
</template>

<script>
import DrawingCanvas from './DrawingCanvas.vue'
import Drawings from './Drawings.vue'

export default {
  name: 'Home',
  components: {
    DrawingCanvas,
    Drawings
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
