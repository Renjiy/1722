<template>
  <div class="indentcommit">
    <p>
      <span>产品价格￥</span>
      <span>50</span>
      <span>/张</span>
    </p>
    <p>提交订单</p>
  </div>
</template>

<script>
export default {
  name: 'indent-commit'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .indentcommit
    display:flex
    align-items:chenter
    height:.88rem
    width:100%
    margin-top:.15rem
    background:white
    position:fixed
    bottom:0
    z-index:10
    p
      flex:1
      text-align:center
      line-height:.88rem
    p:first-child>span:nth-child(1)
      color:#ff9800
    p:first-child>span:nth-child(2)
      color:#ff9800
      font-size:.5rem
    p:first-child>span:nth-child(3)
      color:#999
    p:last-child
      font-size:.4rem
      color:white
      background:#ff9800
</style>
