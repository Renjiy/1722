<template>
  <div class="indentbrief">
    <div class="brief">
      <div class="visitor">
        <span>游客1</span>
        <input type="text" placeholder="游客姓名"/>
      </div>
      <div class="phone">
        <span>手机号</span>
        <input type="buttom" value="+86" readonly class="sixe"/>
        <input type="text" placeholder="请填写手机号" class="pnum"/>
      </div>
      <div class="idcard">
        <span>身份证</span>
        <input type="text" placeholder="请填写正确的身份证号码"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indent-brief'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .indentbrief
    height:2.5rem
    width:100%
    background:white
    display:flex
    flex-direction:column
    justify-content:space-around
    .visitor
      flex:1
    .visitor>input
        width:60%
    .phone
      flex:1
      .sixe
        width:10%
      .pnum
        width:50%
    .idcard
      flex:1
    .idcard>input
        width:60%
</style>
