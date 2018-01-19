<template>
  <div class="city-list-con" ref="cityList">
    <div class="city-fff">
      <div class="city-area">
        <div class="city-title border-topbottom">当前位置</div>
        <div class="city-content">
          <div class="city-list-button">
            <div class="city-list-button-text button-active" @click="handleCityClick(list)">
              {{$store.state.city}}
            </div>
          </div>
        </div><!--<div class="city-content">-->
      </div><!--<div class="city-area">-->
      <div class="city-area">
        <div class="city-title">热门城市</div>
        <div class="city-content">
          <div class="city-list-button" v-for="item of hotlist">
            <div class="city-list-button-text" 
                 :class="{'button-active': item.city === $store.state.city}"
                 @click="handleCityClick(item.city)">
              {{item.city}}
            </div>
          </div>
        </div><!--<div class="city-content">-->
      </div><!--<div class="city-area">-->
      <city-info v-for="(itemlist, index) in china"
                 :itemlist="itemlist"
                 :key="itemlist.id"
                 ref="listArea"></city-info>
    </div><!--<div class="city-fff">-->
  </div><!--<div class="city-list-con">-->
</template>

<script>
  // 引入better-scroll
  import BScroll from 'better-scroll'
  import CityInfo from './cityList'
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'city-list',
    components: {
      CityInfo
    },
    props: {
      list: String,
      hotlist: Array,
      china: Array
    },
    methods: {
      handleCityClick (city) {
        this.changeCity(city)
        this.$nextTick(() => {
          this.$router.push('/')
        })
      },
      ...mapMutations(['changeCity']),
      scrollToIndex (name, index) {
        this.scroll.scrollToElement(this.$refs.listArea[index].$refs.li)
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.cityList)
        this.scroll.refresh()
      })
    },
    watch: {
      list () {
        console.log(this.list)
      }
    },
    computed: {
      ...mapState(['city'])
    },
    activated () {
      this.scroll && this.scroll.refresh()
    }
  }
</script>

<style lang="stylus" scoped>
  .city-list-con
    overflow: hidden
    .city-title
      line-height: .54rem
      padding-left: .3rem
      background: #eee
      color: #616161
      font-size: .26rem
      &::before, &::after
        border-color: #9e9e9e
    .city-content
      overflow: hidden
      padding: 0 .4rem 0 .2rem
      .city-list-button
        float: left
        width: 33.33%
        .city-list-button-text
          line-height: .6rem
          margin: .2rem
          box-sizing: border-box
          border-radius: .06rem
          text-align: center
          border: .02rem solid #ddd
        .button-active
          color: #00bcd4
          border: .02rem solid #00bcd4
</style>