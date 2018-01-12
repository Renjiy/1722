<template>
  <div class="announce-container">
    <div class="announce-container-content">
      <span class="announce-container-icon">☀</span>
      除法定节假日，故宫博物院实行周一闭馆。
      <span class="announce-container-iconfont">></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'announce'
  }
</script>

<style lang='stylus' scoped>
  .announce-container
    margin-bottom: .2rem
    padding-left: .2rem
    height: .88rem
    line-height: .88rem
    color: #f1441a
    background: #fdeede
    .announce-container-content
      margin-right: .6rem
      position: relative
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
      .announce-container-icon
      	display: inline-block
      	margin-right: .1rem
      	color: #f67353
      .announce-container-iconfont
      	display: inline-block
      	position: absolute
      	right: .05rem
      	font-size: .4rem
</style>