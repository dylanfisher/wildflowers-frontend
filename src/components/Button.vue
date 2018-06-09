<template>
  <div class="button" v-on:click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.button {
  border: 1px solid #000;
  padding: 10px 20px;
  display: inline-block;
  cursor: pointer;
}
</style>
