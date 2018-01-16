<template>
  <div class="indentnumber">
    <div class="number">
      <span class="buynum">购买数量</span>
      <input type="text" name="" id="" value="" placeholder="最多购买5张" class="txt1" readonly/>
    </div>
    <div class="add">
      <span class="reduce">-</span>
      <input type="text" name="" id="" value="1" class="txt2"/>
      <span class="minadd">+</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indent-number'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .indentnumber
    height: 1rem
    width: 100%
    background:white
    display:flex
    box-sizing:border-box
    padding:.1rem
    .number
      flex:1
      display:flex
      justify-content:space-around
      align-items:center
      .buynum
        width:40%
        font-size:.35rem
      .txt1
        width:50%
        height:.4rem
        border:none
        color:#333
    .add
      flex:1
      display:flex
      justify-content:flex-end
      align-items:center
      .reduce,.minadd
        width:.4rem
        font-size:.6rem
        height:.4rem
        line-height:.4rem
        background:$bgColor
        text-align:center
      .txt2
        width:20%
        height:.4rem
        text-align:center
        border:.01rem solid #999
</style>
