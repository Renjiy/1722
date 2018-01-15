<template>
  <div class="header">
    <div class="header-main">
      <div class="header-con">
        <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="故宫" class="header-img">
      </div><!--<div class="header-con">-->
      <div class="header-back">
      	<span class="header-back-bj"></span>
      	<span class="header-back-icon iconfont">&#xe624;</span>
      </div><!--<div class="header-back">-->
      <div class="header-info">
      	<div class="header-info-title">故宫(AAAAA景区)</div>
    	  <div class="header-info-icon" @click="showSucc">
          <span class="header-info-icon-title">❤</span>
          <em class="header-info-count">10</em>       		
    	  </div>
      </div><!--<div class="header-info">-->      
    </div><!--<div class="header-main">-->
    
    <div :class="{ show:isshow }" class="hide" @click="handleHideImg">   
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of list" 
                      :key="item.id"  
                      :class="{ headershowimg:isshowimg }">     
          <img :src="item.imgUrl" :alt="item.title" class="header-hide-img">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div><!--<div class="show">-->

  </div><!--<div class="header">-->
</template>

<script>
export default {
  name: 'details-header',
  props: {
    list: Array
  },
  data () {
    return {
      isshowimg: false,
      isshow: false,
      swiperOption: {
        loop: true,
        autoplay: 2000,
        pagination: '.swiper-pagination',
        currentClass: 'my-pagination-current',
        totalClass: 'my-pagination-total',
        paginationType: 'fraction',
        paginationFractionRender (swiperOption, currentClassName, totalClassName) {
          return '<span class="' + currentClassName + '"></span>' +
          ' / ' +
          '<span class="' + totalClassName + '"></span>'
        }
      }
    }
  },
  methods: {
    showSucc () {
      this.isshow = !this.isshow
      this.isshowimg = !this.isshowimg
    },
    handleHideImg () {
      this.isshow = !this.isshow
      this.isshowimg = !this.isshowimg
    }
  }
}
</script>

<style lang='stylus' scoped>
  .header
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 55% 
    .header-main
      position: relative
      .header-con     
        .header-img
        	width: 100%
      .header-back
        position: absolute
        top: .1rem
        left: .1rem
        .header-back-bj
        	display: block
        	width: .7rem
        	height: .7rem
        	background: black
        	opacity: .5
        	border-radius: .7rem
        .header-back-icon
          display: block
          top: .14rem
          left: .14rem
          position: absolute
          line-height: .4rem
          font-size: .4rem
          font-weight: 200
          color: #fff 
      .header-info
        position: absolute
        top: 3.3rem
        left: .2rem 
        min-height: .4rem
        .header-info-title
          position: relative
          z-index: 1
          margin-right: 1.4rem
          line-height: .4rem
          color: #fff
          font-size: .32rem
      	.header-info-icon
          position: absolute
          bottom: .01rem
          left: 5.9rem
          width: 1.2rem
          height: .4rem
          font-size: .3rem
          line-height: .4rem
          background: black
          opacity: .5
          color: #fff
          border-radius: .2rem
          .header-info-icon-title
            display: block
            position: relative
            top: .02rem
            left: .2rem
            float: left
            margin-right: .15rem
            width: .3rem
            height: .3rem
          .header-info-count
            float: left
            margin-left: .2rem
    .show
      position: fixed
      z-index: 10
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: black
      opacity: 1 
      .headershowimg
        display: block
        margin: 3rem auto
        height: 55vw
        .header-hide-img
          width: 100%
</style>