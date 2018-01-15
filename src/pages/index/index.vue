<template>
  <div>
  	<index-header></index-header>
  	<index-swiper :list="swiperInfo"></index-swiper>
  	<index-icons :icons="iconsList"></index-icons>
  </div>
</template>

<script>
  import IndexHeader from './header'
  import IndexSwiper from './swiper'
  import IndexIcons from './icons'
  import axios from 'axios'
  export default {
    name: 'index',
    components: {
      IndexHeader,
      IndexSwiper,
      IndexIcons
    },
    data () {
      return {
        swiperInfo: [],
        iconsList: []
      }
    },
    methods: {
      getIndexData () {
        axios.get('/api/index.json')
             .then(this.handleGetIndexDataSucc.bind(this))
             .catch(this.handleGetIndexDataError.bind(this))
      },
      handleGetIndexDataSucc (res) {
        const data = res.data.data
        this.swiperInfo = data.swiperList
        this.iconsList = data.iconList
      },
      handleGetIndexDataError () {
        console.log('没加载成功')
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>

<style>

</style>
