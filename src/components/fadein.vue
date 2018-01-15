<template>
  <div class="qunar-page-category" :class="{ pagefadein:isfadein }">
    <div class="qunar-page-category-con">
      <div class="qunar-page-category-outer">
        <div class="qunar-page-category-outer-info">
          <h5 class="qunar-page-category-outer-info-title">
            【上午场】故宫成人票+故宫全景手绘地图
          </h5>
          <p class="qunar-page-category-outer-info-price">
            <span class="qunar-page-price">
              ￥
              <em class="qunar-page-price-num">50</em>
              <span class="qunar-page-text">/张</span>
            </span>
            <span class="qunar-page-gray">
              票面价:¥
              <span>50</span>
            </span>
          </p>
        </div><!--<div class="qunar-page-category-outer-info">-->

        <div class="qunar-page-category-outer-select">
          <h6 class="qunar-page-category-outer-select-note">价格日历</h6>
          <div class="qunar-page-category-outer-select-datecard">
            <span class="qunar-page-category-outer-select-datecard-disabled">
              <em class="qunar-datecard-name">今天</em>
              <strong class="qunar-datecard-detail">1月14日</strong>
            </span>
            <span class="qunar-page-category-outer-select-datecard-disabled">
              <em class="qunar-datecard-name">明天</em>
              <strong class="qunar-datecard-detail">1月15日</strong>
            </span>
            <span class="qunar-page-category-outer-select-datecard-disabled">
              <em class="qunar-datecard-name">后天</em>
              <strong class="qunar-datecard-detail">1月16日</strong>
            </span>
            <span class="qunar-page-category-outer-select-datecard-disabled">
              其他日期
            </span>
          </div><!--<div class="qunar-page-category-outer-select-datecard">-->

          <div class="qunar-page-category-outer-select-light">需要在游玩前1天的23:59前预订</div>
        </div><!--<div class="qunar-page-category-outer-select">-->
      </div><!--<div class="qunar-page-category-outer">-->
      <a href="#" class="qunar-page-category-btn">立即预订</a>
      <div class="qunar-page-category-icon" @click="handleHideFade">☒</div>
    </div><!--<div class="qunar-page-category-con">-->
  </div><!--<div class="qunar-page-category">-->

</template>

<script>
export default {
  name: 'fadein',
  data () {
    return {
      isfadein: false
    }
  },
  created () {
    this.$bus.$on('change', this.getShowInfo.bind(this))
  },
  methods: {
    getShowInfo (value) {
      this.isfadein = !this.isfadein
    },
    handleHideFade () {
      this.isfadein = !this.isfadein
    }
  }
}
</script>

<style lang="stylus" scoped>
  .qunar-page-category
    transform: translateY(100%)
    display: none
  .pagefadein
    display: block
    transform: translateY(0)
    position: fixed
    z-index: 92
    right: 0
    bottom: 0
    left: 0
    width: 100%
    background: #f1f1f1 
    transition: transform .3s ease-out
    .qunar-page-category-outer
      margin: 0 .2rem
      .qunar-page-category-outer-info-title
        margin-right: .6rem
        padding: .3rem 0 .1rem
        line-height: .4rem
        color: #212121
        font-size: .34rem
      .qunar-page-category-outer-info-price
        line-height: .48rem
        color: #9e9e9e
        font-size: .24rem
        .qunar-page-price
          margin-right: .06rem
          line-height: .48rem
          color: #ff9800
          font-size: .24rem
          .qunar-page-price-num
            margin-left: .06rem
            font-size: .36rem
          .qunar-page-text
            line-height: .48rem
            color: #9e9e9e
            font-size: .24rem
        .qunar-page-gray
          line-height: .48rem
          margin-left: .05rem
          text-decoration: line-through
          color: #9e9e9e;
          font-size: .24rem
    .qunar-page-category-outer-select
      margin-top: .18rem
      .qunar-page-category-outer-select-note
        line-height: .65rem
        color: #333
        font-size: .26rem   
      .qunar-page-category-outer-select-datecard
        overflow: hidden
        height: .86rem
        .qunar-page-category-outer-select-datecard-disabled
          box-sizing: border-box
          float: left
          margin-left: 0
          margin-right: .1rem
          line-height: .86rem
          width: 22.5%
          height: .86rem
          font-size: .24rem
          border: 1px solid #ddd
          border-radius: .1rem
          text-align: center
          .qunar-datecard-name
            display: block
            padding-top: .08rem
            line-height: .36rem
            width: 100%
            color: #212121
            font-size: .28rem
            color: #dedede
            text-align: center
          .qunar-datecard-detail
            display: block
            padding-bottom: .06rem
            line-height: .32rem
            width: 100%
            color: #212121
            font-size: .24rem
            color: #dedede
            text-align: center
      .qunar-page-category-outer-select-light
        padding: .1rem
        color: #ff9800
        font-size: .24rem
    .qunar-page-category-btn
      display: block
      line-height: .8rem
      width: 100%
      height: .8rem
      border: 0 none
      background: #ff9800
      color: #fff
      font-size: .36rem
      text-align: center
    .qunar-page-category-icon
      position: absolute
      z-index: 2
      right: .2rem
      top: 0
      width: .88rem
      height: 1rem
      color: #9e9e9e
      font-size: .4rem
      line-height: 1rem
      text-align: center
</style>