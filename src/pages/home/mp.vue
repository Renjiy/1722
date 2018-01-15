<template>
  <ul class="mp-listitem-con">
    <li class="mp-listitem-item first">
      <span mp-iconfont></span>
        定位失败
    </li>
    <li class="mp-listitem-item">
      <span mp-iconfont></span>
        5折泡温泉
    </li>

  </ul>
</template>
<script>
    export default {
      name: 'mp-listitem-con'
    }
</script>
<style lang="stylus" scoped>
  .mp-listitem-con
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: box;
    width: 100%
    background-color: #fff
    position: relative
    border-top: .02rem solid #dbdbdb
    border-bottom: .02rem solid #dbdbdb
    margin-top: .1rem
    padding-top: .1rem
    .mp-listitem-item
      overflow: hidden
      -webkit-box-flex: 1
      -moz-box-flex: 1
      -ms-flexbox-flex: 1
      box-flex: 1
      width: 0
      height: .98rem
      font-size: .28rem
      color: #212121;
      line-height: .98rem
      text-align: center
    .first
      border-right: .02rem solid #dbdbdb
</style>