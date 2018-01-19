<template>
  <div class="list-con">
    <div class="list-area" ref="li">
      <div class="list-title">{{itemlist[0]}}</div>
      <div class="list-area-content" v-for="item of itemlist[1]">
        <a class="list-content border">{{item.cityarea}}</a>
      </div> 
    </div><!--<div class="list-area">-->
  </div><!--<div class="list-con">-->
</template>

<script>
  export default {
    name: 'city-list',
    props: {
      itemlist: Array
    }
  }
</script>

<style lang="stylus" scoped>
  .list-title
    line-height: .54rem
    padding-left: .3rem
    background: #eee
    color: #616161
    font-size: .26rem
    &::before, &::after
      border-color: #9e9e9e
  .list-area-content
    line-height: .54rem
    padding: 0
    overflow: hidden
    background: #fff
    .list-content
      display: block
      line-height: .76rem
      padding-left: .2rem
      font-size: .28rem
      color: #212121
      &::before, &::after
        border-color: #c9cccd
</style>		