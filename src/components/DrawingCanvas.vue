<template>
  <div>
    <canvas ref="canvas" id="drawing-canvas"></canvas>
    <div id="drawing-canvas-buttons">
      <v-button ref="button" id="save-svg-button" v-bind:onClick="saveSVG">Save</v-button>
    </div>
  </div>
</template>

<script>
import SignaturePad from 'signature_pad'
import Button from './Button.vue'

export default {
  name: 'DrawingCanvas',
  components: {
    'v-button': Button
  },
  data () {
    return {}
  },
  mounted () {
    this.init()
    // On mobile devices it might make more sense to listen to orientation change,
    // rather than window resize events.
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    init () {
      this.signaturePad = new SignaturePad(this.$refs.canvas, {
        velocityFilterWeight: 0.7,
        minWidth: 0.5,
        maxWidth: 2.5,
        throttle: 0,
        minDistance: 5
      })

      this.setCanvasRatio()
    },
    handleResize () {
      this.setCanvasRatio()

      // This library does not listen for canvas changes, so after the canvas is automatically
      // cleared by the browser, SignaturePad#isEmpty might still return false, even though the
      // canvas looks empty, because the internal data of this library wasn't cleared. To make sure
      // that the state of this library is consistent with visual state of the canvas, you
      // have to clear it manually.
      this.signaturePad.clear()
    },
    setCanvasRatio () {
      const ratio = Math.max(window.devicePixelRatio || 1, 1)

      // This part causes the canvas to be cleared
      this.$refs.canvas.width = this.$refs.canvas.offsetWidth * ratio
      this.$refs.canvas.height = this.$refs.canvas.offsetHeight * ratio
      this.$refs.canvas.getContext('2d').scale(ratio, ratio)
    },
    saveSVG () {
      if (this.signaturePad.isEmpty()) {
        console.warn('Drawing is empty')
      } else {
        this.download(this.signaturePad.toDataURL('image/svg+xml'), 'drawing.svg')
      }
    },
    download (dataURL, filename) {
      const blob = this.dataURLToBlob(dataURL)
      const data = new FormData()

      data.append('drawing[file]', blob)

      this.$http.post('/drawings', data)
        .then(request => {
          // TODO: update drawings state at this point
          this.$http.get('/drawings')
            .then(response => {
              this.signaturePad.clear()
            })
            .catch(() => console.log('Request failed'))
        })
        .catch(() => console.log('Request failed'))
    },
    dataURLToBlob (dataURL) {
      // Code taken from https://github.com/ebidel/filer.js
      var parts = dataURL.split(';base64,')
      var contentType = parts[0].split(':')[1]
      var raw = window.atob(parts[1])
      var rawLength = raw.length
      var uInt8Array = new Uint8Array(rawLength)

      for (var i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i)
      }

      return new Blob([uInt8Array], { type: contentType })
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

  #drawing-canvas-buttons {
    position: absolute;
    bottom: 30px;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 2;
  }
</style>
