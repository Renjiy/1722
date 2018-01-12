<template>
  <div class="qunar-comments">
  	<span class="qunar-comments-icon"></span>
  	<span class="qunar-comments-iconstar">☆☆☆☆☆</span>
  	<span class="qunar-comments-tagscore">5.0分</span>
  	<a href="" class="qunar-comments-total">
  	  <span class="qunar-comments-totalnum">175170评论&nbsp;</span>
  	  <span class="qunar-comments-rightarrow">></span>
  	</a>
  </div>
</template>

<script>
 export default {
   name: 'comments'
}
</script>

<style lang='stylus' scoped>
  .qunar-comments
    margin-top: .2rem
    margin-bottom: .2rem
    height: .8rem
    line-height: .8rem
    background: #fff
    .qunar-comments-icon
      position: relative
      top: .08rem
      display: inline-block
      margin-left: .2rem
      width: .36rem
      height: .36rem
      background: url('../../assets/images/detail.png') 0 -1.35rem no-repeat
      background-size: .4rem 3rem
    .qunar-comments-iconstar
      display: inline-block
      width: 2rem
      height: 2rem
      color: #ffb436
    .qunar-comments-tagscore
      display: inline-block
      margin-left: .1rem
      color: #ff8300
    .qunar-comments-total
      margin-right: .2rem
      display: block
      float: right
      color: #b9b9b9
      .qunar-comments-totalnum
      	display: inline-block
      	font-size: .28rem
      	line-height: .28rem
      .qunar-comments-rightarrow
      	font-size: .4rem
	    
</style>