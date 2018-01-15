<template>
  <div class="slid-container">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="slide-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
  export default{
    name: 'index-swiper',
    props: {
      list: Array
    },
    data () {
      return {
        swiperOption: {
          loop: false,
          autoplay: 3000,
          scrollbar: '.swiper-scrollbar',
          scrollbarHide: false,
          scrollbarDraggable: true
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .slid-container
    overflow: hidden
    height: 0
    padding-bottom: 31.25%
  .slide-img
    width: 100%
</style>