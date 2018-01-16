<template>
  <div>
    <day-trip-header></day-trip-header>
    <day-trip-tab ></day-trip-tab>
    <day-trip-details :list="detailsInfo"></day-trip-details>
    <day-trip-foot></day-trip-foot>
  </div>
</template>


<script>
  import DayTripHeader from './header'
  import DayTripTab from './tab'
  import DayTripDetails from './details'
  import DayTripFoot from './foot'

  import axios from 'axios'
  export default {
    name: 'daytrip',
    components: {
      DayTripHeader,
      DayTripTab,
      DayTripDetails,
      DayTripFoot
    },
    data () {
      return {
        detailsInfo: []
      }
    },
    methods: {
      getIndexData () {
        axios.get('/api/daytrip.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data.data
        this.detailsInfo = data.datailsList
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