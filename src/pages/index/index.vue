<template>
  <div>
    <index-header ref="header"></index-header>
    <index-swiper :list="swiperInfo"></index-swiper>
    <index-icons :list="iconsInfo"></index-icons>
    <index-sights></index-sights>
  </div>
</template>

<script>
  import IndexHeader from './header'
  import IndexSwiper from './swiper'
  import IndexIcons from './icons'
  import IndexSights from './sights'
  import axios from 'axios'
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'index',
    components: {
      IndexHeader,
      IndexSwiper,
      IndexIcons,
      IndexSights
    },
    data () {
      return {
        swiperInfo: [],
        iconsInfo: []
      }
    },
    computed: {
      ...mapState({
        city: 'city'
      })
    },
    methods: {
      ...mapActions({
        delayCity: 'changeCityDelayFiveSeconds'
      }),
      getIndexData () {
        axios.get('/api/index.json?city=' + this.city)
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data.data
        this.swiperInfo = data.swiperList
        this.iconsInfo = data.iconList
        if (!this.city) {
          this.delayCity(data.city)
        }
      },
      handleGetDataErr () {
        console.log('error')
      }
    },
    created () {
      this.getIndexData()
    },
    mounted () {
      this.$refs.header.sayHello()
    },
    watch: {
      city () {
        this.getIndexData()
      }
    }
  }
</script>

<style></style>
