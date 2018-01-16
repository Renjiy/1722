<template>
  <div class="indentprice">
    <div class="brief">
      <p>【上午场】故宫成人票+故宫全景手绘地图</p>
      <div class="briefright">
       <p><span>2018-06-18</span></p>
       <p><span>不可退</span></p>
      </div>
    </div>
    <div class="price">
      <p class="perone">
        <span>￥</span><span>50</span><span>/张</span>
      </p>
      <p class="know">预订须知</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indent-price'
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .indentprice
    height: 1.40rem
    width: 100%
    background:white
    display:flex
    justify-content:space-around
    margin-bottom:.2rem
    .brief
      width:80%
      font-size:.35rem
      padding:.2rem
      padding-bottom:0
      box-sizing:border-box
      .briefright
        display:flex
        font-size:.25rem
        margin-top:.15rem
    .price
      width:20%
      font-size:.30rem
      display:flex
      justify-content:center
      align-items:center
      flex-direction:column
      .perone>span:nth-child(2)
        font-size:.5rem
        color:orange
      .perone>span:nth-child(1)
        font-size:.25rem
        color:orange
      .perone>span:nth-child(3)
        font-size:.25rem
        color:#999
      .know
        color:$bgColor
</style>
