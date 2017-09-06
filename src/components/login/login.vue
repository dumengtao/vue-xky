<template>
	<div class="login">
		<v-header></v-header>
		<v-search></v-search>
		<div class="login-wrap">
			<div class="content">
				<div class="erweima">
					<img src="./image/ewm2.png" height="154" width="154">
					<div class="desc">
						<p>扫描左侧二维码下载</p>
						<p>“健康深圳”app</p>
						<button>立即下载</button>
					</div>
				</div>
				<div class="loginFrame">
					<div class="title">{{ loginTitle }}</div>
					<div class="login-content">
						<div class="username">
							<div class="img">
								<img src="./image/user.png" height="24" width="23">
							</div>
							<input type="text" name="username" placeholder="手机号码" maxlength="11" @focus="focusBorder($event)" @blur="blurBorder($event)" ref="username">
						</div>
						<div class="password">
							<div class="img">
								<img src="./image/pwd.png" height="24" width="22">
							</div>
							<input type="password" name="password" placeholder="密码" @focus="focusBorder($event)" @blur="blurBorder($event)" ref="password">
						</div>
						<router-link to="/inConstruction" class="forgetPassword">忘记密码?</router-link>
						<div class="btn" @click="login">登录</div>
					</div>
				</div>
			</div>
		</div>
		<v-footer class="footer"></v-footer>
	</div>
</template>

<script type="ecmascript-6">
	import header from '../header/header.vue'
	import search from '../search/search.vue'
	import footer from '../footer/footer.vue'
	import bus from '../../common/js/bus.js'

	export default {
		data() {
			return {
				loginTitle: '用户登录',
				user: [],
				doctor: [],
				hospital: []
			}
		},
		created() {
			bus.$on('userLogin',() => {
				this.loginTitle = '用户登录'
			})
			bus.$on('doctorLogin',() => {
				this.loginTitle = '医生登录'
			})
			bus.$on('hospitalLogin',() => {
				this.loginTitle = '机构登录'
			})

			this.$http.get('/api/user').then((res) => {
				res = res.body
				if(res.error === 0){
					this.user = res.data
				}
			})
			this.$http.get('/api/doctor').then((res) => {
				res = res.body
				if(res.error === 0){
					this.doctor = res.data
				}
			})
			this.$http.get('/api/hospital').then((res) => {
				res = res.body
				if(res.error === 0){
					this.hospital = res.data
				}
			})
		},
		methods: {
			focusBorder(event) {
				document.getElementsByClassName('username')[0].style.borderColor = '#eee'
				document.getElementsByClassName('password')[0].style.borderColor = '#eee'
				event.target.parentNode.style.borderColor = '#3374dc'
			},
			blurBorder(event) {
				event.target.parentNode.style.borderColor = '#eee'
			},
			login() {
				if(this.$refs.username.value === '' || this.$refs.password.value === ''){
					if(this.$refs.username.value === ''){
						this.$message.error('用户名为空！')
						this.$refs.username.parentNode.style.borderColor = 'red'
					}
					if(this.$refs.username.value !== '' && this.$refs.password.value === ''){
						this.$message.error('密码为空！')
						this.$refs.password.parentNode.style.borderColor = 'red'
					}
				}else{
					if(this.loginTitle === '用户登录'){
						for(let i = 0; i < this.user.length; i++){
							if(this.user[i].username === this.$refs.username.value){
								if(this.user[i].password === this.$refs.password.value){
									window.location.href = '/inConstruction'
								}else{
									this.$message.error('密码错误！')
									this.$refs.password.parentNode.style.borderColor = 'red'
								}
							}else{
								this.$message.error('用户名不存在！')
								this.$refs.username.parentNode.style.borderColor = 'red'
							}
						}
					}
					if(this.loginTitle === '医生登录'){
						for(let i = 0; i < this.doctor.length; i++){
							if(this.doctor[i].username === this.$refs.username.value){
								if(this.doctor[i].password === this.$refs.password.value){
									window.location.href = '/inConstruction'
								}else{
									this.$message.error('密码错误！')
									this.$refs.password.parentNode.style.borderColor = 'red'
								}
							}else{
								this.$message.error('用户名不存在！')
								this.$refs.username.parentNode.style.borderColor = 'red'
							}
						}
					}
					if(this.loginTitle === '机构登录'){
						for(let i = 0; i < this.hospital.length; i++){
							if(this.hospital[i].username === this.$refs.username.value){
								if(this.hospital[i].password === this.$refs.password.value){
									window.location.href = '/inConstruction'
								}else{
									this.$message.error('密码错误！')
									this.$refs.password.parentNode.style.borderColor = 'red'
								}
							}else{
								this.$message.error('用户名不存在！')
								this.$refs.username.parentNode.style.borderColor = 'red'
							}
						}
					}
				}
			}
		},
		components: {
			'v-header': header,
			'v-search': search,
			'v-footer': footer
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.login
		.login-wrap
			margin-top 10px
			width 100%
			height 620px
			background url('./image/loginbg.png') no-repeat
			background-size 100% 100%
			.content
				box-sizing border-box
				margin 0 auto
				padding-left 150px
				width 1024px
				height 100%
				.erweima
					float left
					margin-top 233px
					width 400px
					height 154px
					img
						float left
					.desc
						float left
						margin-left 20px
						margin-top 30px
						p
							font-size 18px
							color #3374dc
							text-align center
							line-height 26px
						button
							display block
							margin-top 8px
							padding 8px 30px
							font-size 18px
							color #fff
							text-align center
							background-color #f24c58
							border none
							border-radius 6px
							cursor pointer
				.loginFrame
					box-sizing border-box
					float left
					margin-left 496px
					margin-top -280px
					padding-bottom 20px
					width 347px
					border 1px solid #3374dc
					border-radius 4px
					background-color #fff
					.title
						box-sizing border-box
						padding-left 28px
						width 100%
						height 72px
						border-left 4px solid #3374dc
						font-size 18px
						color #3374dc
						line-height 72px
					.login-content
						box-sizing border-box
						padding 16px 26px 0 26px
						width 100%
						.username,.password
							margin-top 20px
							width 100%
							height 40px
							border 2px solid #eee
							border-radius 4px
							line-height 40px
							font-size 16px
							.img
								float left
								width 40px
								height 40px
								background-color #eee
								text-align center
								img
									vertical-align middle
							input
								box-sizing border-box
								float left
								padding-left 20px
								width 253px
								height 40px
						.password
							margin-bottom 20px
						.forgetPassword
							font-size 12px
							color #3374dc
						.btn
							display block
							margin-top 20px
							width 100%
							height 42px
							line-height 42px
							font-size 16px
							color #fff
							text-align center
							background-color #3374dc
							border-radius 4px
							cursor pointer
		.footer
			margin-top 100px
</style>
