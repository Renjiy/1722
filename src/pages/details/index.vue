<template>
  <div class="details">
    <details-header></details-header>
    <base-info></base-info>
    <comments></comments>
    <announce></announce>
  </div>
</template>

<script>
  import DetailsHeader from './header'
  import BaseInfo from './baseinfo'
  import Comments from './comments'
  import Announce from './announce'
  export default {
    name: 'index',
    components: {
      DetailsHeader,
      BaseInfo,
      Comments,
      Announce
    }
  }
</script>

<style lang='stylus' scoped>
  .details
    background: #f5f5f5
</style>