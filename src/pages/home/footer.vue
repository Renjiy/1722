<template>
  <div class="qn_footer">
    <div class="main_nav_wrapper">
      <ul class="main_nav" ref="list">
        <li class="flight">
          <a href="#">
            <div class="icon"></div>
            <span class="title">机票</span>
          </a>
        </li>
        <li class="hotel">
          <a href="#">
            <div class="icon" style="background-position: -25px 0;"></div>
            <span class="title">酒店</span>
          </a>
        </li>
        <li class="gongyu">
          <a href="#">
            <div class="icon" style="background-position: -150px 0px;"></div>
            <span class="title">公寓</span>
          </a>
        </li>
        <li ref="gd">
          <a href="javascript:void(0);">
            <div style="background-position: -50px 0;"></div>
            <span class="title"  @click="handleClick" >更多</span>
          </a>
        </li>
        <li class="tuan">
          <a href="#">
            <div class="icon" style="background-position: -50px 0;"></div>
            <span class="title">团购</span>
          </a>
        </li>
        <li class="train">
          <a href="#">
            <div class="icon" style="background-position: -50px -25px;"></div>
            <span class="title">火车票</span>
          </a>
        </li>
        <li class="jingdian actived">
          <a href="#">
            <div class="icon" style="background-position: -75px 0;"></div>
            <span class="title">景点</span>
          </a>
        </li>
        <li class="zuche">
          <a href="#">
            <div class="icon" style="background-position: -100px 0;"></div>
            <span class="title">接送机</span>
          </a>
        </li>
        <li class="dujia">
          <a href="#">
            <div class="icon" style="background-position: 0 -25px;"></div>
            <span class="title">度假</span>
          </a>
        </li>
        <li class="gonglue">
          <a href="#">
            <div class="icon" style="background-position: -75px -25px;"></div>
            <span class="title">攻略</span>
          </a>
        </li>
        <li class="lvtu">
          <a href="#">
            <div class="icon" style="background-position: -100px -25px;"></div>
            <span class="title">旅图</span>
          </a>
        </li>
        <li class="cheche">
          <a href="#">
            <div class="icon" style="background-position: -125px 0;"></div>
            <span class="title">车车</span>
          </a>
        </li>
        <li class="dangdiren">
          <a href="#">
            <div class="icon" style="background-position: -125px -25px;"></div>
            <span class="title">当地人</span>
          </a>
        </li>
        <li class="tag toggle" style="top: 97px;"><span @click="StopClick">收起</span></li>
      </ul>
    </div>
    <ul class="footer_nav clearfix" id="qunarFooterBottom">
      <li><a href="">登录</a></li>
      <li><a href="">我的订单</a></li>
      <li style="display: none;"><a href="">个人中心</a></li>
      <li><a href="">最近浏览</a></li>
      <li><a href="">关于我们</a></li>
    </ul>
    <ul class="mobile_pc clearfix">
        <li class="active"><a href="">触屏版</a></li>
        <li><a href="">电脑版</a></li>
    </ul>
    <div class="copyright">
      <span>Qunar 京ICP备05021087</span>
      <a class="qn_ml25" href="//touch.qunar.com/h5/feedback">意见反馈</a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'weekend-trip',
    props: {
      list: Array
    },
    methods: {
      handleClick () {
        this.$refs.list.style.height = 2.2 + 'rem'
        this.$refs.gd.style.display = 'none'
      },
      StopClick () {
        this.$refs.list.style.height = 0.6 + 'rem'
        this.$refs.gd.style.display = 'block'
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .qn_footer
    background: #f3f3f3
    .main_nav
      position: relative
      width: 6rem
      height: .5rem
      margin: 0 auto
      padding: .2rem .2rem 0 .2rem
      overflow: hidden
      li
        margin: 0px
        padding-left: .2rem
        height: .62rem
        width: 1.3rem
        float: left
        position: relative
        background: none
       a
         display: block
         height: .44rem
         width: 100%
         font-size: .24rem
         .icon
            float: left
            width: .44rem
            height: .44rem
            background: url(//source.qunarzz.com/site/images/wap/touch/images/v2/images2x/nav_7.png) 0 0 no-repeat
            background-size: 3.5rem 1rem
           .title
             float: left
             display: inline-block
             color: #9e9e9e
             margin: .06rem 0 0 .1rem
             border-bottom: .02rem solid #acacac
             font-size: .24rem
      .tag
        position: absolute
        top: .16rem
        right: .12rem
        background: #f3f3f3
        font-size: .28rem
        color: #9e9e9e
        text-align:center
        width: 1.4rem
    .footer_nav
      width: 100%
      height: .78rem
      border-bottom: .02rem solid #cacaca
      li
        float: left
        padding-left: .4rem
        a
          position: relative
          color: #25a4bb
          font-size: .28rem
          line-height: .78rem
    .mobile_pc
      padding: .2rem 0 0 0
      text-align: center
      li
        display: inline-block
        margin: 0 .3rem
    .copyright
      color: #9e9e9e
      text-align: center
      font-size: .28rem
      padding: .2rem
      a
        color: #9e9e9e
        height: .66rem
</style>