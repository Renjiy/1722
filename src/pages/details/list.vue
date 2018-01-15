<template>
  <div class="list-container">
    <div class="list-container-ticket">
      <div class="list-promote">
      	<h3 class="list-container-ticket-type">
      	  去哪儿推荐
      	</h3>
      	<div class="list-ticket-item">
      	  <div class="list-ticket-item-main">
      	  	<div>
      	  	  <h6 class="list-ticket-title">【上午场】故宫成人票+故宫全景手绘地图</h6>
      	  	  <ul class="list-ticket-light"></ul>
      	  	  <ul class="list-ticket-light">
      	  	  	<span class="list-ticket-tag">
      	  	  	  <span class="list-ticket-icon">♧</span>
      	  	  	  可订明日
      	  	  	</span>
      	  	  	<span class="list-ticket-tag">
      	  	  	  <span class="list-ticket-icon">♧</span>
      	  	  	  不可退
      	  	  	</span>
      	  	  </ul>
      	  	</div>
      	  </div><!--<div class="list-ticket-item-main">-->
      	  <div class="list-ticket-item-side">
      	  	<a href="#" class="list-ticket-link" title="故宫门票">
      	  	  <strong class="list-ticket-sale">
      	  	    ￥
      	  	    <em class="list-ticket-num">50</em>
      	  	  </strong>
      	  	  <em class="list-ticket-btn" @click="handleShowInfo">预定</em>
      	  	</a>
      	  </div>
      	</div><!--<div class="list-ticket-item">-->

      	<div class="list-ticket-item">
      	  <div class="list-ticket-item-main">
      	  	<div>
      	  	  <h6 class="list-ticket-title">【北京深度游必选组合】天安门+故宫+恭王府/八达岭/颐和园</h6>
      	  	  <ul class="list-ticket-light"></ul>
      	  	  <ul class="list-ticket-light">
      	  	  	<span class="list-ticket-tag">
      	  	  	  <span class="list-ticket-icon">♧</span>
      	  	  	  可订明日
      	  	  	</span>
      	  	  	<span class="list-ticket-tag">
      	  	  	  <span class="list-ticket-icon">♧</span>
      	  	  	  无购物
      	  	  	</span>
      	  	  	<span class="list-ticket-tag">
      	  	  	  <span class="list-ticket-icon">♧</span>
      	  	  	  无自费
      	  	  	</span>
      	  	  </ul>
      	  	</div>
      	  </div><!--<div class="list-ticket-item-main">-->
      	  <div class="list-ticket-item-side">
      	  	<a href="#" class="list-ticket-link" title="故宫门票">
      	  	  <strong class="list-ticket-sale">
      	  	    ￥
      	  	    <em class="list-ticket-num">27</em>
      	  	    <span class="list-ticket-numword">起</span>
      	  	  </strong>
      	  	  <em class="list-ticket-btn" @click="handleShowInfo">查看</em>
      	  	</a>
      	  </div>
      	</div><!--<div class="list-ticket-item">-->
      </div><!--<div class="list-promote">-->
    </div><!--<div class="list-container-ticket">-->
  </div><!--<div class="list-container">-->
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        isfadein: true
      }
    },
    methods: {
      handleShowInfo () {
        this.$bus.$emit('change', this.isfadein)
        this.isfadein = !this.isfadein
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .list-container-ticket
    position: relative
    .list-promote
      position: relative
      background: #fff
      margin-bottom: .2rem
      .list-container-ticket-type
        posotion: relative
        z-index: 4
        line-height: .88rem
        margin-bottom: .2rem
        padding: 0 .2rem
        height: .88rem
        color: #333
        font-size: .32rem
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAflBMVEUAAAD/bm7/b2//b2//eXn/b2//b2//bm7/b2//b2//bm7/b2//b2//b2//bm7/b2//b2//cXH/eHj/qqr/bm7/////cXH/iIj/oqL//f3/mJj/fHz/9/f/8PD/4eH/ycn/6+v/1dX/0ND/t7f/ra3/kpL/jo7/c3P/5ub/vr7o37bEAAAAFHRSTlMA9uZeCfny7NvLt6+PfGZONxsRA/pz1k8AAAFrSURBVEjHpZbZdoMwDERtMEvYE8YJZN/b/v8PNvicJsiYqJzcB548WGNZksUAVWZJHAVBFCdZqQTDwk8lesjUX4hxVB5iQJiPbVMXHpx4RS0czGcYZTYXAyoPb/AqYeFLvEX61nqwEEUlwSKrnl9X/JtmZfl4Oq9d53Pfan2yzurvdAs42OsHaxAKYVDOA207wcEKShlBDhfaIUBu7lsIl2UjuIASLkZTsDaCxpWMFC7ORrCBRfqw7MxZY9Z/w0YqUWLI8tLqJ+25n8BSZP3Am+aG2/Vw1IQ9XmQiwZNV9z+0mkKtJCKmAg094IgXsYg4Ab0gkQh4wRUvgv8I1kTAh7QHCYk3fQIxnbCCHXokImMFPyCJKznB9gvkaijJ7XCnl0+kU3ZISQFttp3DnWW5oQVES3S57D4Eq0RJE+DJSZvh8RRpZDwFaZU8s5o0YxZvPrXdTx0on40sfih+Nnb5wT7x6fDR42Ty8+cXnHyOvDgQEbUAAAAASUVORK5CYII=')
        background-repeat: no-repeat
        background-size: .5rem .5rem
        background-position: .2rem center
        text-indent: .7rem
        border-bottom: 1px solid #ddd
        &:before
          position: absolute
          background: #dadada
          content: "\0020"
          overflow: hidden
      .list-ticket-item
        display: flex
        position: relative
        padding: .2rem .2rem .24rem .2rem
        width: 100%
        box-sizing: border-box
        border-bottom: 1px solid #ddd
        .list-ticket-item-main
          flex: 2.9
          align-items: center
          border-right: 1px solid #ddd
          .list-ticket-title
            line-height: .52rem
            margin-right: .1rem
            padding: 0
            font-size: .3rem
          .list-ticket-light
            padding: .04rem 0 .08rem 0
            .list-ticket-tag
              display: inline-block
              margin-right: .24rem
              line-height: .24rem
              font-size: .24rem
              white-sapce: nowrap
              .list-ticket-icon
                display: inline-block
                margin-right: .08rem
                font-size: .2rem
                color: #ff4500
        .list-ticket-item-side
          flex: 1
          align-items: center
          .list-ticket-link
            display: block
            width: 100%
            padding-left: .4rem
            margin-top: .4rem
            color: #00afc7            
            .list-ticket-sale
              display: block
              margin-left: .23rem
              align-items: center
              line-height: .24rem
              height: .32rem
              font-size: .24rem
              color: #ff9800
              .list-ticket-num
                margin-left: .04rem
                line-height: .3rem
                font-size: .32rem
              .list-ticket-numword
                display: inline-block
                font-size: .24rem
                color: #9e9e9e
            .list-ticket-btn
              display: block
              margin-top: .05rem
              line-height: .6rem
              text-align: center
              width: 1.5rem
              height: .6rem
              font-size: .28rem
              color: #fff
              background: #ff9800
              border-radius: .06rem
       
</style>