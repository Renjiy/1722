<template>
  <div class="indentheader">
    <span class="back iconfont backns">&#xe624;</span>
    <span class="name">订单填写</span>
    <span class="login">登录</span>
  </div>
</template>

<script>
export default {
  name: 'indent-header'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .indentheader
    height: .88rem
    width: 100%
    background: $bgColor
    display:flex
    justify-content:space-between
    align-items:center
    color:white
    .backns
      padding: 0 .2rem
    .name
      font-size:.35rem
    .login
      margin:0 .2rem
</style>
