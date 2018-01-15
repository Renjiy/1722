<template>
  <div class="lazy-load" id="hot-sight">
    <h2 class="mp-modtitle">热销推荐</h2>
    <ul v-for="item of list" :key="item.id">
    	<li class="mp-hot-prod mp-border-bottom">
        <a href="" title="故宫" mp-role="analytics">
          <div class="mp-hotlist-img image-ready"><img :src="item.imgUrl" alt="故宫">
          </div>
          <div class="mp-hotlist-infos">
            <div class="mp-hotlist-title">{{item.title}}</div>
            <div class="mp-hotlist-desc">{{item.desc}}</div>
          </div>
          <div class="mp-price mp-hotlist-price">¥<em class="mp-price-num">{{item.price}}</em><span class="mp-price-text">起</span></div>
        </a>
    	</li>
    </ul>
    <div class="mp-modmore">
      <a hybrid-link="" title="去哪儿门票" href="">查看所有产品</a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'hot-sight',
    props: {
      list: Array
    }
  }
</script>
<style lang="stylus" scoped>
.lazy-load
  background: #fff
  .mp-modtitle
    height: .8rem
    padding-left: .26rem
    line-height: .8rem
    color: #212121
    background: #f5f5f5
  .mp-hot-prod
    position: relative
    overflow: hidden
    height: 1.4rem
    padding: .24rem
    border-bottom: .02rem solid #dbdbdb
    .mp-hotlist-img
      position: absolute
      top: .24rem
      left: .24rem
      width: 1.4rem
      height: 1.4rem
      img
        vertical-align: top
        transition: opacity 400ms
        width: 1.4rem
        height: 1.4rem
    .mp-hotlist-infos
      margin-left: 1.6rem
      .mp-hotlist-title
        overflow: hidden;
        margin-top: .04rem;
        margin-bottom: .1rem;
        color: #212121;
        font-size: .3rem;
        white-space: nowrap;
        text-overflow: ellipsis;
      .mp-hotlist-desc
        overflow: hidden;
        margin-bottom: .1rem;
        height: .4rem;
        line-height: .4rem;
        color: #9e9e9e;
        white-space: nowrap;
        text-overflow: ellipsis;
    .mp-hotlist-price
      margin-left: 1.6rem;
      color: #ff8300;
      .mp-price-num
        font-size: .36rem;
        padding: 0 .04rem;
      .mp-price-text
        color: #9e9e9e;
        font-size: .24rem;
  .mp-modmore
    margin-top: -.02rem;
    height: .88rem;
    color: #00afc7;
    line-height: .88rem;
    text-align: center;
</style>