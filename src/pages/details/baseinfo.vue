<template>
  <div class="base-info">
  	<div class="base-info-address base-info-comm">
  	  <p class="base-info-address-txt base-info-comm-p">
  	  	<span class="base-info-adress-icon base-info-comm-icon">❀</span>
  	  	北京市东城区景山前街4号
  	  	<span class="base-info-adress-iconfont base-info-comm-iconfont">></span>
  	  </p>
  	</div>
  	<div class="base-info-intro base-info-comm">
  	  <p class="base-info-intro-txt base-info-comm-p">
  	  	<span class="base-info-intro-icon base-info-comm-font">❀</span>
  	  	查看景点简介及开放时间
  	  	<span class="base-info-intro-iconfont base-info-comm-iconfont">></span>
  	  </p>
  	</div>
  </div><!--<div class="base-info">-->
</template>

<script>
  export default {
    name: 'baseinfo'
  }
</script>

<style lang='stylus' scoped>
  .base-info
    position: relative
    z-index: 2
    margin-bottom: .1rem
    padding: .1rem .2rem 0 .2rem
    border-radius: .1rem .1rem 0 0
    background: #fff
    .base-info-comm
      position: relative
      height: .88rem
      line-height: .88rem
      color: #212121
      .base-info-comm-p
        padding-right: .56rem
        white-space: nowrap
        text-overflow: ellipsis
	  .base-info-comm-iconfont
	    position: absolute
	    right: 0
	    font-size: .4rem
	    color: #b9b9b9
</style>