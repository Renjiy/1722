<template>
  <div class="qunar-for" ref="qunarhide">
      <div class="qunar-ticket-default" v-for="item of grouplist" :key="item.id">
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
</template>

<script>
  export default {
    name: 'hide-list',
    props: {
      grouplist: Array
    }
  }
</script>

<style lang="stylus" scoped>
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
</style>