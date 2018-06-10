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

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
