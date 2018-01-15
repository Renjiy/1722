<template>
  <div class="sights">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>1</li>
      <li>2</li>
      <li>1</li>
      <li>2</li>
      <li>1</li>
      <li>2</li>
      <li>1</li>
      <li>2</li>
      <li>1</li>
      <li>2</li>
      <li>1</li>
      <li>2</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'index-sights',
    props: {
      list: Array,
      default: []
    },
    data () {
      return {

      }
    },
    mounted () {
      this.scroll = new BScroll('.sights')
    }
  }
</script>

<style lang="stylus" scoped>
  .sights
    overflow: hidden
    height: 1rem
    background: green
</style>
