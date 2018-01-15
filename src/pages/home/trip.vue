<template>
  <div class="lazy-load" id="weekend-trip">
    <h2 class="mp-modtitle">周末去哪儿</h2>
    <div v-for="item of list" :key="item.id">
      <div class="mp-product-item">
        <a href="" title="北京温泉排行榜" class="mp-fulllink">
          <div class="product-imgcontainer image-ready">
            <img :src="item.imgUrl">
          </div>
          <div class="mp-product-info">
            <p class="product-name">{{item.title}}</p>
            <p class="product-desc">{{item.desc}}</p>
          </div>
        </a>
      </div>
    </div>
    <div class="mp-price-desc">
        <span></span>
        <div class="mp-price-desc-info">
            <span class="mp-price-desc-highlight">票面价</span>是指通过景区指定窗口售卖的纸质门票上标注的价格
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'weekend-trip',
    props: {
      list: Array
    }
  }
</script>
<style lang="stylus" scoped>
  .mp-modtitle
    height: .8rem
    padding-left: .26rem
    line-height: .8rem
    color: #212121
    background: #f5f5f5
  .mp-product-item
    position: relative
    margin-bottom: .1rem
    background: #fff
    .mp-fulllink
      display: block
      width: 100%
      height: 100%
      .product-imgcontainer
        overflow: hidden
        height: 0
        padding-bottom: 37.4375%
       img
        opacity: 1
        transition: opacity 400ms
        width: 100%
    .mp-product-info
      position: relative
      padding: .14rem .2rem .2rem .2rem
      .product-name
        overflow: hidden
        padding-right: 1.4rem
        color: #212121
        font-size: .28rem
        line-height: .48rem
        white-space: nowrap
        text-overflow: ellipsis
      .product-desc
        overflow: hidden
        padding-right: 1.4rem
        color: #616161
        font-size: .24rem
        line-height: .42rem
        white-space: nowrap
        text-overflow: ellipsis
  .mp-price-desc
    margin-top: .1rem
    padding: .14rem .1rem
    font-size: .24rem
    line-height: .32rem
    background: #fff
    color: #616161
   span
    // width: .24rem;
    display: block;
    float: left;
    line-height: .32rem;
</style>