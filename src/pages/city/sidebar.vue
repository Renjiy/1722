<template>
  <div class="sidebar-con">
    <ul class="siderbar-con-content">
      <li class="siderbar-con-item" v-for="(itemlist, index) of item" :key="itemlist[0]" @click="clickChange(itemlist[0], index)">
        {{itemlist[0]}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'sidebar',
    props: {
      item: Array
    },
    methods: {
      clickChange (name, index) {
        this.$emit('clickChange', name, index)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .siderbar-con-content
    position: fixed
    width: .5rem
    height: 100%
    top: 28%
    right: 0
    bottom: 0
    background: #fff
    text-align: center
    .siderbar-con-item
      width: .32rem
      line-height: .32rem
      padding-left: .2rem
      color: #00afc7
      font-size: .24rem
      text-align: center
</style>