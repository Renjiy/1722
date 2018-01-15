<template>
  <div class="qn_footer">
    <div class="main_nav_wrapper">
      <ul class="main_nav" id="qunarFooterUL">
        <li class="flight">
          <a href="//touch.qunar.com/h5/flight/">
            <div class="icon"></div>
            <span class="title">机票</span>
          </a>
        </li>
        <li class="hotel"><a href="//touch.qunar.com/h5/hotel/"><div class="icon"></div><span class="title">酒店</span></a></li>
        <li class="gongyu"><a href="//touch.qunar.com/h5/hotel/"><div class="icon"></div><span class="title">公寓</span></a></li>
        <li class="tuan"><a href="http://touch.qunar.com/h5/group/grouplist"><div class="icon"></div><span class="title">团购</span></a></li>
        <li class="train"><a href="http://touch.qunar.com/h5/train/"><div class="icon"></div><span class="title">火车票</span></a></li>
        <li class="jingdian actived"><div class="icon"></div><span class="title">景点</span></li>
        <li class="zuche"><a href="http://car.qunar.com/?from=10"><div class="icon"></div><span class="title">接送机</span></a></li>
        <li class="dujia"><a href="//touch.dujia.qunar.com"><div class="icon"></div><span class="title">度假</span></a></li>
        <li class="gonglue"><a href="http://touch.travel.qunar.com/"><div class="icon"></div><span class="title">攻略</span></a></li>
        <li class="lvtu"><a href="http://touch.lvtu.qunar.com"><div class="icon"></div><span class="title">旅图</span></a></li>
        <li class="cheche"><a href="http://cheche.qunar.com/?from=28"><div class="icon"></div><span class="title">车车</span></a></li>
        <li class="dangdiren"><a href="http://dangdi.qunar.com/touch/localman/city-list"><div class="icon"></div><span class="title">当地人</span></a></li>
        <li class="tag toggle" id="qnFooterToggle" style="top: 97px;"><span>收起</span></li>
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
  </div>
</template>
<script>
  export default {
    name: 'weekend-trip',
    props: {
      list: Array
    }
  }
</script>
<style lang="stylus" scoped>
  .qn_footer
    background: #f3f3f3
    .main_nav
      position: relative
      width: 300px
      height: 25px
      margin: 0 auto
      padding: 10px 10px 0 10px
      overflow: hidden
    li
      margin: 0px
      padding-left: 10px
      height: 31px
      width: 65px
      float: left
      position: relative
      background: none
    a
      display: block
      height: 22px
      width: 100%
      font-size: 12px
      .icon
        float: left
        width: 22px
        height: 22px
        background: url(//source.qunarzz.com/site/images/wap/touch/images/v2/images2x/nav_7.png) 0 0 no-repeat
        background-size: 175px 50px
      .title
        float: left
        display: inline-block
        color: #9e9e9e
        margin: 3px 0 0 5px
        border-bottom: 1px solid #acacac
        font-size: 12px
    .footer_nav
      width: 100%
      height: 39px
      border-bottom: 1px solid #cacaca
    li
      float: left
      padding-left: 20px
    a
      position: relative;
      color: #25a4bb;
      font-size: 14px;
      line-height: 39px;

</style>