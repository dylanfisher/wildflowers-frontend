<template>
  <img :src="url" class="drawing-layer">
</template>

<script>
import { parallax } from '../mixins/parallax'

export default {
  name: 'DrawingLayer',
  mixins: [parallax],
  props: {
    url: String,
    index: Number
  }
}
</script>

<style scoped>
.drawing-layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
