<template>
  <div class="tab">
    <ul class="tabcont">
      <li class="list" @click="handleClick" >全部分类<span class="before"></span>
        
      </li>
      <li class="list">全部目的地<span class="before"></span></li>
      <li class="list">推荐排序<span class="before"></span></li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'day-trip-tab',
  methods: {
    handleClick: function () {
      alert(1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .tab
    height: .8rem
    .tabcont
      display: flex
      border-bottom: .02rem solid #ccc
      .list
        float:left
        width: 33%
        text-align: center
        line-height: .8rem
        font-size: 0.26rem
        color: #111111
        .before
          &:before
            position: absolute
            top: 1.2rem
            content: "\0020"
            width: 0;
            height: 0;
            border-left: .14rem solid transparent;
            border-right: .14rem solid transparent;
            border-top: .14rem solid #5f5f5f;
</style>