export const parallax = {
  data () {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    }
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('mousemove', this.handleMousemove)
    window.addEventListener('mousedown', this.handleMousedown)
    window.addEventListener('mouseup', this.handleMouseup)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    parallax (e) {
      const parallaxEl = this.parallaxEl || this.$el
      const index = parseInt(this.index + 1) || 9
      const layerCoeffX = (this.windowWidth / 19) / index
      const layerCoeffY = (this.windowHeight / 26) / index
      const x = (this.windowWidth - parallaxEl.offsetWidth) / 2 - (e.pageX - (this.windowWidth / 2)) / layerCoeffX
      const y = (this.windowHeight - parallaxEl.offsetHeight) / 2 - (e.pageY - (this.windowHeight / 2)) / layerCoeffY

      parallaxEl.style.webkitTransform = 'translate(' + x + 'px, ' + y + 'px)'
      parallaxEl.style.MozTransform = 'translate(' + x + 'px, ' + y + 'px)'
      parallaxEl.style.msTransform = 'translate(' + x + 'px, ' + y + 'px)'
      parallaxEl.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
    },
    handleResize () {
      this.data.width = window.innerWidth
      this.data.height = window.innerHeight
    },
    handleMousemove (e) {
      this.parallax(e)
    },
    handleMousedown (e) {
      window.removeEventListener('mousemove', this.handleMousemove)
    },
    handleMouseup (e) {
      window.addEventListener('mousemove', this.handleMousemove)
    }
  }
}
