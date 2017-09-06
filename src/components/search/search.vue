<template>
	<div class="search">
		<div class="logo">
			<router-link to="/xky"><img src="./logo.png" height="70" width="381"></router-link>
		</div>
		<div class="search-wrap">
			<input class="search-content" type="text" name="searchContent" placeholder="医院名称/医生名称/科室名称">
			<input class="search-button" type="button" name="searchButton" value="搜索">
		</div>
	</div>
</template>

<script type="ecmascript-6">
	export default {

	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.search
		margin 0 auto
		width 1024px
		height 98px
		.logo
			float left
			margin-left 0
			margin-top 14px
			width 381px
			height 70px
		.search-wrap
			float right
			margin-right 0
			margin-top 29px
			width 400px
			height 40px
			line-height 40px
			border 1px solid #88b209
			border-radius 4px
			.search-content
				float left
				box-sizing border-box
				padding 0 10px
				width 320px
				height 40px
				font-size 12px
			.search-button
				float right
				width 80px
				height 40px
				font-size 13px
				font-weight bold
				color #fff
				text-align center
				background-color #88b209
				cursor pointer
</style>
