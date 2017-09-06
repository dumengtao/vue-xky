<template>
	<div class="header">
		<div class="content">
			<div class="nav">
				<router-link to="/xky" class="router changeColor">首页</router-link>
				<router-link to="/inConstruction" class="router">预约服务</router-link>
				<router-link to="/inConstruction" class="router">档案查询</router-link>
				<router-link to="/inConstruction" class="router">健康科普</router-link>
				<router-link to="/inConstruction" class="router">办事服务</router-link>
				<router-link to="/inConstruction" class="router">继教规培</router-link>
				<router-link to="/inConstruction" class="router">软件下载</router-link>
			</div>
			<div class="login">
				<router-link to="/login" @click.native="userLogin">登录</router-link>
				<span>|</span>
				<router-link to="/inConstruction">注册</router-link>
				<router-link to="/login" @click.native="doctorLogin">医生用户</router-link>
				<router-link to="/login" @click.native="hospitalLogin">机构用户</router-link>
				<router-link to="/inConstruction" class="changeColor">客服中心</router-link>
				<span class="phone">电话：0755-23961188</span>
			</div>
		</div>
	</div>
</template>

<script type="ecmascript-6">
	import bus from '../../common/js/bus.js'

	export default {
		methods: {
			userLogin() {
				bus.$emit('userLogin')
			},
			doctorLogin() {
				bus.$emit('doctorLogin')
			},
			hospitalLogin() {
				bus.$emit('hospitalLogin')
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.header
		width 100%
		height 40px
		line-height 40px
		background-color #f5f5f5
		.content
			margin 0 auto
			width 1024px
			height 40px
			font-size 14px
			color #666
			.nav
				float left
				height 40px
				.router
					margin-right 10px
					&.changeColor
						color #4782df
					&:hover
						color #4782df
			.login
				float right
				height 40px
				.changeColor
					color #4782df
				span
					font-size 20px
					&.phone
						font-size 14px
</style>
