<template>
  <div id="drawings">
    <drawing-layer v-for="(item, index) in data" :key="index" v-bind:url="item.url" v-bind:index="index" />
  </div>
</template>

<script>
import DrawingLayer from './DrawingLayer.vue'
export default {
  name: 'Drawings',
  components: {
    DrawingLayer
  },
  data () {
    return {
      data: null
    }
  },
  mounted () {
    this.$http.get('/drawings')
      .then(response => (this.data = response.data))
      .catch(() => console.log('Request failed'))
  }
}
</script>

<style scoped>

</style>
