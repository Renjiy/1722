<template>
	<div>
	 	<div class="location-containner">
			<h6 class="area-title">您的位置</h6>
			<div class="location">
				<div class="location-city citySelect">北京</div>
			</div>
		</div>
		<div class="hotCity-containner">
			<h6 class="area-title">热门城市</h6>
			<div class="hotCity location">
				<div class="hotCity-city location-city">北京</div>
				<div class="hotCity-city location-city">北京</div>
				<div class="hotCity-city location-city">北京</div>
				<div class="hotCity-city location-city">北京</div>
				<div class="hotCity-city location-city">北京</div>
				<div class="hotCity-city location-city">北京</div>
				<div class="hotCity-city location-city">北京</div>
				<div class="hotCity-city location-city">北京</div>
				<div class="hotCity-city location-city">北京</div>
				<div class="hotCity-city location-city">北京</div>
			</div>
		</div>
 	</div>
</template>

<script>
  export default {
    name: 'cityList'
  }
</script>

<style lang="stylus" scoped>
	.area-title
		background: #f5f5f5
		color: #616161
		font-size: .26rem
		line-height: .54rem
		padding-left: .3rem
	.location
		background: #fff
		overflow: hidden
		padding: .04rem .5rem .26rem .2rem	
		.location-city
			box-sizing: border-box
			border: .02rem solid #c9cccd
			border-radius: .06rem
			color: #212121
			line-height: .56rem
			margin-top: .2rem
			overflow: hidden
			text-overflow: ellipsis
			text-align: center
			white-space: nowrap
			width: 30%
		.citySelect
			border-color: #00afc7
			color: #00afc7
	.hotCity
		display: flex
		flex-direction: row
		flex-wrap: wrap
		justify-content: space-between		
</style>