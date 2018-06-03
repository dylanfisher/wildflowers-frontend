<template>
  <canvas id="drawing-canvas"></canvas>
</template>

<script>
import SignaturePad from 'signature_pad'

export default {
  name: 'DrawingCanvas',
  mounted () {
    this.init()
  },
  methods: {
    init () {
      /* eslint-disable */
      const signaturePad = new SignaturePad(this.$el, {
        velocityFilterWeight: 0.7,
        minWidth: 0.5,
        maxWidth: 2.5,
        throttle: 0,
        minDistance: 5
      })

      const ratio = Math.max(window.devicePixelRatio || 1, 1)

      this.$el.width = this.$el.offsetWidth * ratio;
      this.$el.height = this.$el.offsetHeight * ratio;
      this.$el.getContext('2d').scale(ratio, ratio);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #drawing-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
</style>
