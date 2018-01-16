<template>
  <div class="details">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="(page, index) of pageList" :key="index">
        <div class="area-con">
          <div class="arae-item" v-for="item of page" :key="item.id">
            <img class="img" :src="item.imgUrl"/>
            <p class="title">{{item.title}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'day-trip-details',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
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
      })
      return pages
    }
  },
  methods: {
    addClick: function () {
      console.log(this.page)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .arae-item
    display: flex
    margin-top: .2rem
    border-bottom: .02rem solid #ccc
    .img
      width: 1.6rem
      height: 1.6rem
    .title
      font-size: .26rem
      margin-left: .22rem
</style>