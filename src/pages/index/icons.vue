<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="hasSwiper">
      <!-- slides -->
        <swiper-slide v-for="(page, index) of pageList" :key="index">     
          <div class="area-con">
            <div class="area-item" v-for="item of page" :key="item.id">
              <router-link to="/details">
                <img :src="item.imgUrl" alt="" class="area-img">
                <p class="area-title" >{{item.title}}</p>
                </router-link>
            </div>    
          </div>    
        </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'index-icons',
    props: {
      icons: Array
    },
    data () {
      return {
        swiperOption: {
          loop: true,
          pagination: '.swiper-pagination'
        }
      }
    },
    computed: {
      pageList () {
        const pages = []
        this.icons.forEach((value, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(value)
        })
        return pages
      },
      hasSwiper () {
        return !!this.icons.length
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .icons
    height: 3.8rem
    overflow: hidden
    .area-con
      display: flex
      flex-wrap: wrap
      .area-item
        width: 25%
        height: 1.9rem
        .area-img
          display: block
          margin: .3rem auto
          width: .9rem
          height: .9rem
        .area-title
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
          line-height: .4rem
          text-align: center
</style>
