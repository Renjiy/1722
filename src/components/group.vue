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

      <hide-list :hidelist="hideList"></hide-list>
      
      <div class="qunar-ticket-con" @click="handleShowDefault1(index)">
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

      <div class="qunar-hide" v-for="(item, index) of showlist1" style="display:none;">
        <div class="qunar-ticket-con">
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
      </div>

      <div class="qunar-ticket-more" @click="handleShowMore(index)" :class="{ qunarhidemore:!ishideMore }">
        查看剩余产品
        <span class="qunar-ticket-more-icon">∨</span>
      </div>
    </div><!--<div class="qunar-ticket-group">-->
  </div>

</template>

<script>
  import HideList from './hidelist'
  import axios from 'axios'
  export default {
    name: 'group',
    components: {
      HideList
    },
    props: {
      list: Array,
      showlist1: Array
    },
    data () {
      return {
        isShowDefault: false,
        isShowMore: false,
        ishideMore: true,
        hideList: []
      }
    },
    methods: {
      getShowGroupInfo () {
        axios.get('/api/group.json')
             .then(this.handleGetGroupSucc.bind(this))
             .catch(this.handleGetGroupErr.bind(this))
      },
      handleGetGroupSucc (res) {
        const data = res.data.data
        this.hideList = data.hideList
        console.log(this.hideList)
      },
      handleGetGroupErr () {
        console.log('error')
      },
      handleShowDefault (index) {
        const qunarshow = this.$refs.qunarfor
        console.log(qunarshow)
      },
      handleShowMore (index) {
        const qunarhide = document.getElementsByClassName('qunar-hide')[index]
        console.log(qunarhide)
        if (qunarhide.style.display === 'block') {
          qunarhide.style.display = 'none'
        } else {
          qunarhide.style.display = 'block'
        }
        this.ishideMore = !this.ishideMore
      }
    },
    created () {
      this.getShowGroupInfo()
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