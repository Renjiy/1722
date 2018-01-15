<template>
  <div>
    <index-header></index-header>
    <index-swiper :list="swiperInfo"></index-swiper>
    <index-icons :list="iconsInfo"></index-icons>
    <index-map></index-map>
    <index-hot :list="hotInfo"></index-hot>
    <index-trip :list="tripInfo"></index-trip>
    <index-footer></index-footer>
  </div>
</template>

<script>
  import IndexHeader from './head'
  import IndexSwiper from './swiper'
  import IndexIcons from './icons'
  import IndexMap from './mp'
  import IndexHot from './hot'
  import IndexTrip from './trip'
  import IndexFooter from './footer'
  import axios from 'axios'
  export default {
    name: 'index',
    components: {
      IndexHeader,
      IndexSwiper,
      IndexIcons,
      IndexMap,
      IndexHot,
      IndexTrip,
      IndexFooter
    },
    data () {
      return {
        swiperInfo: [],
        iconsInfo: [],
        hotInfo: [],
        tripInfo: []
      }
    },
    methods: {
      getIndexData () {
        axios.get('/api/index.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data.data
        this.swiperInfo = data.swiperList
        this.iconsInfo = data.iconList
        this.hotInfo = data.itemList
        this.tripInfo = data.tripList
      },
      handleGetDataErr () {
        console.log('error')
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>

<style></style>
