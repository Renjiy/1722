<template>
  <div class="head">
    <div class="back iconfont">&#xe624;</div>
    <div class="search">
      <span class="iconfont search-icon">&#xe632;</span>请输入搜索内容
    </div>
    <div class="city">
      乌鲁木齐
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .head
    background: $bgColor
    color: white
    display: flex
    height: .88rem
    line-height: .88rem
    .back
      font-size: .4rem
      font-weight: bold
      text-align: center
      width: .58rem
    .search
      border-radius: .1rem
      background: white
      color: #ccc
      flex: 1
      height: .6rem
      line-height: .6rem
      margin: .14rem .2rem
      padding-left: .4rem
      .search-icon
        position: relative
        top: .02rem
        padding-right: .04rem
    .city
      padding-right: .6rem
      position: relative
      color: white
      &:before
        border-left: .14rem solid transparent
        border-right: .14rem solid transparent
        border-top: .14rem solid #fff
        content: "\0020"
        position: absolute
        top: .34rem
        right: .2rem
        width: 0
        height: 0
</style>
