<template>
  <div class="tab">
    <ul class="tabcont">
      <li class="list" @click="showToggle">全部分类<span class="before"></span>
      </li>
      <li class="list" @click="handleClick">全部目的地<span class="before"></span>
      
      </li>
      <li class="list" @click="showToggle">推荐排序<span class="before"></span></li>
    </ul>
    <div class="cont" v-show="show">
      <ul class="cont-ul">
        <li class="cont-li">全部分类</li>
        <li class="cont-li">一日游</li>
        <li class="cont-li">文化古迹</li>
        <li class="cont-li">交通</li>
        <li class="cont-li">温泉</li>
      </ul>
    </div>
    <div class="cont" v-show="isShow">
      <ul>
        <li>全部目的地</li>
        <li>北京</li>
        <li>保定</li>
        <li>唐山</li>
        <li>天津</li>
        <li>张家口</li>
        <li>承德</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'day-trip-tab',
  data () {
    return {
      show: false,
      isShow: false
    }
  },
  methods: {
    showToggle: function () {
      this.show = !this.show
    },
    handleClick: function () {
      this.isShow = !this.isShow
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
      position: relative
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
            top: .3rem
            content: "\0020"
            width: 0;
            height: 0;
            border-left: .14rem solid transparent;
            border-right: .14rem solid transparent;
            border-top: .14rem solid #5f5f5f;
    .cont
      width: 100%
      height: 4rem
      background: rgba(255,255,255,.8)
      position: absolute
      border: .02rem solid #ccc
      z-index: 10
      .cont-ul
        display: inline-block
        .cont-li
          height: .5rem
      
</style>