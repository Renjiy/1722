<template>
  <div>
  	<index-header :city="$store.state.city"></index-header>
  	<index-swiper :list="swiperInfo"></index-swiper>
  	<index-icons :icons="iconsList"></index-icons>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
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
    computed: {
      ...mapState(['city'])
    },
    watch: {
      city () {
        this.getIndexData()
      }
    },
    methods: {
      ...mapMutations(['changeCity']),
      getIndexData () {
        axios.get('/api/index.json?city=' + this.$store.state.city)
             .then(this.handleGetIndexDataSucc.bind(this))
             .catch(this.handleGetIndexDataError.bind(this))
      },
      handleGetIndexDataSucc (res) {
        const data = res.data.data
        this.swiperInfo = data.swiperList
        this.iconsList = data.iconList
        if (!this.$store.state.city) {
          this.$store.state.commit('changeCity', data.city)
        }
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
