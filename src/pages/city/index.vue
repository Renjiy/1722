<template>
  <div class="city">
  	<city-header></city-header>
    <city-search :list="china"></city-search>
    <city-list class="city-main" :list="city" :hotlist="hotcity" :china="china" ref="list"></city-list>
    <side-bar :item="china" @clickChange="handleClick"></side-bar>
  </div>
</template>

<script>
  import CityHeader from './header'
  import CitySearch from './search'
  import CityList from './list'
  import SideBar from './sidebar'
  import axios from 'axios'
  export default {
    name: 'city',
    components: {
      CityHeader,
      CitySearch,
      CityList,
      SideBar
    },
    data () {
      return {
        city: '',
        hotcity: [],
        china: []
      }
    },
    created () {
      this.getListInfo()
    },
    methods: {
      getListInfo () {
        axios.get('/api/cityList.json?city=' + this.$store.state.city)
             .then(this.handleGetListInfoSucc.bind(this))
             .catch(this.handleGetListInfoErr.bind(this))
      },
      handleGetListInfoSucc (res) {
        res && (res = res.data)
        if (res && res.data) {
          res.data && (this.city = res.data.city)
          res.data && (this.hotcity = res.data.hotcity)
          res.data && (this.china = res.data.china)
        } else {
          this.handleGetListInfoErr()
        }
      },
      handleGetListInfoErr () {
        console.log('error')
      },
      handleClick (name, index) {
        this.$refs.list.scrollToIndex(name, index)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .city
    display: flex
    flex-direction: column
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    .city-main
      overflow: hidden
      flex: 1
</style>
