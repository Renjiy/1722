<template>
  <div class="foot">
    <div class="foot-cont">
      <div class="left">上一页</div>
      <div class="right">下一页</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'day-trip-foot',
  props: {
    list: Array
  },
  computed: {
    pageList () {
      const pages = []
      this.list.forEach((value, index) => {
        const page = Math.floor(index / 10)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(value)
        console.log(page + 1)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .foot
    height: .6rem
    .foot-cont
      display: inline-block
      margin: 0 auto
      .left
        float: left
        width: 1rem
        height: .5rem
        border: .02rem solid #ccc
        text-align: center
        line-height: .5rem
      .right
        float: left
        width: 1rem
        height: .5rem
        border: .02rem solid #ccc
        text-align: center
        line-height: .5rem
      
</style>