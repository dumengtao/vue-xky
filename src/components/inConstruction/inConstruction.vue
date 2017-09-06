<template>
	<div class="inConstruction">
		<v-header></v-header>
		<v-search></v-search>
		<div class="inConstruction-wrap">
			<img src="./image/clock.png" height="68" width="68">
			<p>该功能正在建设中...</p>
			<router-link to="/xky" class="back">返回首页</router-link>
		</div>
		<v-footer class="footer"></v-footer>
	</div>
</template>

<script type="ecmascript-6">
	import header from '../header/header.vue'
	import search from '../search/search.vue'
	import footer from '../footer/footer.vue'

	export default {
		components: {
			'v-header': header,
			'v-search': search,
			'v-footer': footer
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.inConstruction
		width 100%
		height 100%
		.inConstruction-wrap
			box-sizing border-box
			margin-top 10px
			padding-top 100px
			width 100%
			height 644px
			background url('./image/inConstruction.png') no-repeat
			background-size 100% 100%
			img
				display block
				margin 0 auto 40px
			p
				margin-bottom 60px
				font-size 24px
				color #4782df
				text-align center
			.back
				display block
				margin 0 auto
				padding 8px 0
				width 120px
				font-size 18px
				color #fff
				background-color #4782df
				text-align center
				border-radius 15px
		.footer
			margin-top 78px
</style>
