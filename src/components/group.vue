<template>
  <div>
    <div class="qunar-ticket-group" v-for="(item, index) of list" :key="item.id">
      <h3 class="qunar-ticket-type">
        <span class="qunar-ticket-type-icon"></span>
        {{item.title}}
      </h3>
      <div class="qunar-ticket-con" @click="handleShowDefault(index)">
        <div class="qunar-ticket-con-info">
          <h5 class="qunar-ticket-name">
            {{item.titleTop}}
            <span class="qunar-ticket-subname">{{item.subTitleTop}}</span>
          </h5>
          <div class="qunar-ticket-price">
            ￥
            <em class="qunar-ticket-price-num">{{item.priceTop}}</em>
            <span class="qunar-ticket-numword">起</span>
          </div>
        </div><!--<div class="qunar-ticket-con-info">-->
      </div><!--<div class="qunar-ticket-con">-->
      
      <div class="qunar-for" v-for="(item, index) of hidelist" :key="item.id">
        <div class="qunar-ticket-default">
          <div class="qunar-ticket-item">
            <div class="qunar-ticket-main">
              <div>
                <span class="qunar-ticket-onedayitem">{{item.title}}</span>
                <h6 class="qunar-ticket-onedayitem-title">{{item.titleMiddle}}</h6>
                <ul class="qunar-ticket-light"></ul>
                <ul class="qunar-ticket-light">
                  <span class="qunar-ticket-desctag">
                    <span class="qunar-ticket-desctag-icon">☜</span>
                    {{item.subTitleTop}}}
                  </span>
                  <span class="qunar-ticket-desctag">
                    <span class="qunar-ticket-desctag-icon">☜</span>
                    {{item.subTitleMiddle}}
                  </span>
                </ul>
              </div>
            </div><!--<div class="qunar-ticket-main">-->

            <div class="qunar-ticket-side">
              <a href="#" class="qunar-ticket-link">
                <strong class="qunar-ticket-sale">
                  ￥
                  <em class="qunar-ticket-num">
                    {{item.price}}
                  </em>
                </strong>
                <em class="qunar-ticket-btn">
                  预定
                </em>
              </a>
            </div><!--div class="qunar-ticket-side">-->

          </div><!--<div class="qunar-ticket-item">-->
        </div><!--<div class="qunar-ticket-default">-->
      </div>

      <div class="qunar-ticket-con">
        <div class="qunar-ticket-con-info">
          <h5 class="qunar-ticket-name">
            {{item.titleMiddle}}
            <span class="qunar-ticket-subname">{{item.subTitleMiddle}}</span>
          </h5>
          <div class="qunar-ticket-price">
            ￥
            <em class="qunar-ticket-price-num">{{item.priceMiddle}}</em>
            <span class="qunar-ticket-numword">起</span>
          </div>
        </div><!--<div class="qunar-ticket-con-info">-->
      </div><!--<div class="qunar-ticket-con">-->

      <div class="qunar-ticket-con qunar-ticket-hide">
        <div class="qunar-ticket-con-info">
          <h5 class="qunar-ticket-name">
            {{item.titleBottom}}
            <span class="qunar-ticket-subname">{{item.subTitleBottom}}</span>
          </h5>
          <div class="qunar-ticket-price">
            ￥
            <em class="qunar-ticket-price-num">{{item.priceBottom}}</em>
            <span class="qunar-ticket-numword">起</span>
          </div>
        </div><!--<div class="qunar-ticket-con-info">-->
      </div><!--<div class="qunar-ticket-con">-->

      <div class="qunar-ticket-more" @click="handleShowMore(index)" :class="{ qunarhidemore:!ishideMore }">
        查看剩余产品
        <span class="qunar-ticket-more-icon">∨</span>
      </div>
    </div><!--<div class="qunar-ticket-group">-->
  </div>

</template>

<script>
  export default {
    name: 'group',
    props: {
      list: Array,
      hidelist: Array
    },
    data () {
      return {
        isShowDefault: false,
        isShowMore: false,
        ishideMore: true
      }
    },
    methods: {
      handleShowDefault (index) {
        console.log(index)
      },
      handleShowMore (index) {
        this.isShowMore = !this.isShowMore
        this.ishideMore = !this.ishideMore
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .qunar-ticket-group
    margin-top: .2rem
    background: #fff
    .qunar-ticket-type
      overflow: hidden
      position: relative
      z-index: 4
      margin-bottom: -.02rem
      padding: 0 .2rem
      line-height: .88rem
      height: .88rem
      background: #fff
      color: #333;
      font-size: .32rem   
      text-indent: .4rem
      border-bottom: 1px solid #ddd
      .qunar-ticket-type-icon
        display: inline-block
        position: absolute
        width: .36rem
        height: .36rem
        top: .26rem
        left: .2rem
        background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
        margin-right: .1rem
        background-size: .4rem 3rem
    .qunar-ticket-con
      overflow: hidden
      border-bottom: 1px solid #ddd
      .qunar-ticket-con-info
        position: relative
        z-index: 2
        margin-bottom: -.02rem
        padding: .24rem .2rem
        background: #fff
        .qunar-ticket-name
          overflow: hidden
          margin-right: 1.8rem
          color: #333
          font-size: .3rem
          line-height: .48rem
          .qunar-ticket-subname
            font-size: .24rem
            line-height: .32rem
            margin: .1rem 0 .14rem .1rem
            margin-right: 1.84rem
            color: #888
        .qunar-ticket-price
          overflow: hidden
          position: absolute
          top: 50%
          right: .46rem
          line-height: .4rem
          height: .4rem
          margin-top: -.28rem   
          font-size: .24rem
          color: #ff9800
          .qunar-ticket-price-num
            margin-left: .04rem
            font-size: .36rem
          .qunar-ticket-numword
            display: inline-block
            color: #9e9e9e
            font-size: .24rem    
    .qunar-ticket-hide
      display: none
    .qunar-ticket-default
      border-bottom: 1px solid #ddd    
      .qunar-ticket-item
        display: flex
        position: relative
        padding: .25rem
        width: 100%
        box-sizing: border-box
        background: #f5f5f5
        .qunar-ticket-main
          flex: 2.92
          width: .02rem
          align-items: center
          .qunar-ticket-onedayitem
            display: inline-block
            overflow: hidden
            padding-left: 0
            padding-right: 0
            line-height: .34rem
            max-width: 2.5rem
            padding: 0 .2rem
            white-space: nowrap
            text-overflow: ellipsis
            color: #666
          .qunar-ticket-onedayitem-title
            padding-top: 0
            padding: .08rem 0
            line-height: .36rem
            overflow: hidden
            text-overflow: ellipsis
            color: #888
            font-size: .24rem
          .qunar-ticket-light
            overflow: hidden
            .qunar-ticket-desctag
              display: inline-block
              margin-right: .24rem
              line-height: .32rem
              color: #616161
              font-size: .24rem
              white-space: nowrap
              .qunar-ticket-desctag-icon
                display: inline-block
                margin-right: .08rem
                color: #1ba9ba
                font-size: .2rem
        .qunar-ticket-side
          display: flex
          align-items: center
          flex: 1
          position: relative
          width: .02rem
          .qunar-ticket-link
            box-sizing: border-box
            display: block
            padding-left: .2rem
            width: 100%
            color: #00afc7
            text-decoration: none
            .qunar-ticket-sale
              display: block
              overflow: hidden
              line-height: .28rem
              height: .28rem
              font-size: .24rem
              text-align: center
              color: #ff9800
              .qunar-ticket-num
                margin-left: .04rem
                font-size: .32rem
                line-height: .3rem
                color: #ff9800
                text-align: center
            .qunar-ticket-btn
              display: block;
              overflow: hidden
              line-height: .6rem
              height: .6rem
              text-align: center  
              color: #fff
              font-size: .28rem
              background: #ff9800
              border-radius: .06rem
    .qunarshowmore
      display: block
    .qunarhidemore
      display: none
    .qunar-ticket-more
      position: relative
      z-index: 2
      margin-top: -.02rem
      line-height: .8rem
      height: .8rem
      background: #fff
      color: #616161   
      text-align: center
      .qunar-ticket-more-icon
        margin-left: .1rem
        color: #616161
        font-size: .2rem
      
            
          
</style>