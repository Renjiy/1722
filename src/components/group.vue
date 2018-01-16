<template>
  <div>
    <div class="qunar-ticket-group" :key="item.id" v-for="(item, index) of ticketList">
      <h3 class="qunar-ticket-type">
        <span class="qunar-ticket-type-icon"></span>
        {{item.name}}
      </h3>
      <div v-for="(itemlist, indexl) of item.list1"
           v-show="itemlist.show">
        <div class="qunar-ticket-con" @click="handleShowDefault(index, indexl)">
          <div class="qunar-ticket-con-info">
            <h5 class="qunar-ticket-name">
              {{itemlist.titleTop}}
              <span class="qunar-ticket-subname">{{itemlist.subTitleTop}}</span>
            </h5>
            <div class="qunar-ticket-price">
              ￥
              <em class="qunar-ticket-price-num">{{itemlist.priceTop}}</em>
              <span class="qunar-ticket-numword">起</span>
            </div>
          </div><!--<div class="qunar-ticket-con-info">-->
        </div><!--<div class="qunar-ticket-con">-->
        <hide-list :grouplist="itemlist.supliers" ref="qunarfor" v-show="itemlist.fff"></hide-list> 
      </div>
      <div class="qunar-ticket-more" @click="handleShowMore(index, $event)" v-if="item.hasMore">
        查看剩余产品
        <span class="qunar-ticket-more-icon">∨</span>
      </div>
    </div><!--<div class="qunar-ticket-group">-->
  </div>
</template>
<script>
  import HideList from './hidelist'
  export default {
    name: 'group',
    components: {
      HideList
    },
    props: {
      list: Array,
      showlist1: Array,
      producelist: Array
    },
    data () {
      return {
        isShowDefault: false,
        isShowMore: false,
        ishideMore: true,
        groupList: [],
        ticketList: []
      }
    },
    methods: {
      handleShowDefault (index, indexl) {
        this.ticketList[index].list1[indexl].fff = !this.ticketList[index].list1[indexl].fff
      },
      handleShowMore (index, e) {
        e.target.style.display = 'none'
        this.ticketList[index].list1 = this.ticketList[index].list1.map((value, index) => {
          value.show = true
          return value
        })
      }
    },
    watch: {
      list () {
        this.ticketList = JSON.parse(JSON.stringify(this.list))
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