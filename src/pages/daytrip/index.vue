<template>
  <index-header></index-header>
</template>

<script>
  import IndexHeader from './header'
  import axios from 'axios'
  export default {
    name: 'daytrip',
    components: {
      IndexHeader
    },
    props: ['id'],
    created () {
      this.getDayTripInfo()
    },
    watch: {
      id () {
        this.getDayTripInfo()
      }
    },
    methods: {
      getDayTripInfo () {
        axios.get('/api/daytrip.json?id=' + this.id)
             .then(this.handleGetDayTripInfoSucc.bind(this))
             .catch(this.handleGetDayTripInfoErr.bind(this))
      },
      handleGetDayTripInfoSucc (res) {
        console.log(this.id)
      },
      handleGetDayTripInfoErr () {
        console.log('error')
      }
    }
  }
</script>

<style></style>
