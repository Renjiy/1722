<template>
	<div class="body">
	  <city-header></city-header>
	  <city-search></city-search>
	  <city-List></city-List>
  </div>
</template>

<script>
  import CityHeader from './header'
  import CitySearch from './search'
  import CityList from './cityList'
  export default {
    name: 'index',
    components: {
      CityHeader,
      CitySearch,
      CityList
    }
  }
</script>
<style lang="stylus" scoped>
	.body
		overflow: hidden
</style>
