<template>
  <div class="header">
    <div class="header-main" :class="{ divactive:isdivactive }">
      <div class="header-con">
        <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="故宫" class="header-img">
      </div><!--<div class="header-con">-->
      <div class="header-back">
      	<span class="header-back-bj"></span>
      	<span class="header-back-icon iconfont">&#xe624;</span>
      </div><!--<div class="header-back">-->
      <div class="header-info">
      	<div class="header-info-title">故宫(AAAAA景区)</div>
      	<div class="header-info-icon" @click="handleShowImageClick">
      		<span class="header-info-icon-title">❤</span>
      		<em class="header-info-count">10</em>
      	</div>
      </div><!--<div class="header-info">-->      
    </div><!--<div class="header-main">-->
    <div class="imgactive">
      	<img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="故宫" class="header-hide-img" :class="{ headershowimg:isshowimg }">
    </div><!--<div class="header-hide">-->
  </div><!--<div class="header">-->
</template>

<script>
export default {
  name: 'details-header',
  data: function () {
    return {
      isdivactive: false,
      isshowimg: true
    }
  },
  methods: {
    handleShowImageClick: function () {
      this.isdivactive = !this.isdivactive
      this.isshowimg = !this.isshowimg
    }
  }
}
</script>

<style lang='stylus' scoped>
  .header
    height: 4rem
    overflow: hidden
    .header-main
      position: relative
    .divactive
        display: none
      .header-con
        width: 100%
        height: 4rem    
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
        	color: white
        	line-height: .4rem
        	font-size: .4rem
        	font-weight: 200
      .header-info
      	position: absolute
      	top: 3.3rem
      	left: .2rem
      	min-height: .4rem
      	.header-info-title
      	  position: relative
      	  z-index: 1
      	  margin-right: 1.4rem
      	  color: white
      	  line-height: .4rem
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
      	  border-radius: .2rem
      	  .header-info-icon-title
      	    display: block
      	    position: relative
      	    top: .02rem
      	    left: .25rem
      	    float: left
      	    margin-right: .15rem
      	    width: .3rem
      	    height: .3rem
      	    color: white
      	  .header-info-count
      	  	float: left
      	  	margin-left: .2rem
      	  	color: white
      .imgactive
        width: 100%
        height: 4rem
        .header-hide-img
          display: block
          width: 100%
        .headershowimg
        	display: none 
</style>