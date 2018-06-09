<template>
  <ul id="drawings">
    <li v-for="(item, index) in data" :key='index'>
      <img :src="item.url" class="drawing-layer">
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Drawings',
  data () {
    return {
      data: null
    }
  },
  mounted () {
    this.$http.get('/drawings')
      .then(response => (this.data = response.data))
      .catch(() => console.log('Request failed'))
  },
  beforeDestroy () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #drawings,
  #drawings li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .drawing-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
