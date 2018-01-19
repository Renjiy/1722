<template>
  <div class="slide-container">
    <swiper :options="swiperOption" v-if="hasSwiper">
      <!-- slides -->
        <swiper-slide v-for="item of list" :key="item.id">     
          <img class="slide-img" :src="item.imgUrl" alt="">        
        </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'index-swiper',
    props: {
      list: Array
    },
    data () {
      return {
        swiperOption: {
          loop: true,
          autoplay: 2000,
          pagination: '.swiper-pagination'
        }
      }
    },
    computed: {
      hasSwiper () {
        return !!this.list.length
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .swiper-pagination >>> .swiper-pagination-bullet-active
    background: red
  .slide-container
    height: 0
    overflow: hidden
    padding-bottom: 31.25%
  .slide-img
    width: 100%
</style>
