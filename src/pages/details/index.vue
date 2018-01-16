<template>
  <div class="details">
    <details-header :list="showList"></details-header>
    <base-info></base-info>
    <comments></comments>
    <announce></announce>
    <list></list>
    <fadein></fadein>
    <group :list="groupList" :showlist1="showList1" :producelist="produceList"></group>
  </div>
</template>

<script>
  import DetailsHeader from './header'
  import BaseInfo from './baseinfo'
  import Comments from './comments'
  import Announce from './announce'
  import List from './list'
  import Group from '../../components/group'
  import Fadein from '../../components/fadein'
  import axios from 'axios'
  export default {
    name: 'index',
    data () {
      return {
        showList: [],
        groupList: [],
        hideList: [],
        showList1: [],
        produceList: []
      }
    },
    components: {
      DetailsHeader,
      BaseInfo,
      Comments,
      Announce,
      List,
      Group,
      Fadein
    },
    methods: {
      getShowImgInfo () {
        axios.get('/api/details.json')
             .then(this.handleGetShowImgSucc.bind(this))
             .catch(this.handleGetShowImgErr.bind(this))
      },
      handleGetShowImgSucc (res) {
        const data = res.data.data
        this.showList = data.showImgList
        this.groupList = data.groupList
        this.hideList = data.hideList
        this.showList1 = data.showList1
        this.produceList = data.produceList
      },
      handleGetShowImgErr () {
        console.log('error')
      }
    },
    created () {
      this.getShowImgInfo()
    }
  }
</script>

<style lang='stylus' scoped>
  .details
    background: #f5f5f5
</style>