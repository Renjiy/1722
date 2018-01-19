<template>
  <div class="city-header">
    <div class="city-header-con">
      <span class="city-header-left-icon iconfont"
            @click="handleClick">
            &#xe624;</span>
      <div class="city-header-con-middle">
        <span class="city-header-con-middle-left">境内</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'city-header',
    methods: {
      handleClick () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .city-header-con
    width: 100%
    height: .88rem
    background: #00bcd4
    position: relative
    .city-header-left-icon
      position: absolute
      left: 0
      top: 0
      line-height: .88rem
      font-size: .44rem
      color: #fff
    .city-header-con-middle
      position: absolute
      top: .12rem
      margin-left: 25%
      width: 4rem
      height: .6rem
      border: .03rem solid #fff
      border-radius: .07rem
      .city-header-con-middle-left
        display: inline-block
        line-height: .58rem
        width: 2rem
        height: .58rem
        text-align: center
        font-size: .24rem
        background: #fff
        color: #00bcd4
        
        
        
</style>