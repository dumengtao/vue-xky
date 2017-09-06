<template>
	<div class="homepage">
		<v-header></v-header>
		<v-search></v-search>
		<div class="homepage-content">
			<div class="nav">
				<ul>
					<li class="single">
						<router-link to="/inConstruction" class="router">
							<img src="./image/yyfw.png" height="28" width="28">
							<p>预约服务</p>
						</router-link>
					</li>
					<li class="double">
						<router-link to="/inConstruction" class="router">
							<img src="./image/dncx.png" height="28" width="28">
							<p>档案查询</p>
						</router-link>
					</li>
					<li class="single">
						<router-link to="/inConstruction" class="router">
							<img src="./image/jkjy.png" height="28" width="28">
							<p>健康科普</p>
						</router-link>
					</li>
					<li class="double">
						<router-link to="/inConstruction" class="router">
							<img src="./image/bscx.png" height="28" width="28">
							<p>办事服务</p>
						</router-link>
					</li>
					<li class="single">
						<router-link to="/inConstruction" class="router">
							<img src="./image/jjgp.png" height="28" width="28">
							<p>继教规培</p>
						</router-link>
					</li>
					<li class="double">
						<router-link to="/inConstruction" class="router">
							<img src="./image/wlyy.png" height="28" width="28">
							<p>网络医院</p>
						</router-link>
					</li>
					<li class="single">
						<router-link to="/inConstruction" class="router">
							<img src="./image/xxbz.png" height="28" width="28">
							<p>信息标准</p>
						</router-link>
					</li>
				</ul>
			</div>
			<div class="banner" @mouseenter="stopBanner" @mouseleave="playBanner">
				<transition-group tag="ul" class="wrap" :name="list">
					<li v-for="(item,index) in items" :key="index" v-show="index===nowIndex">
						<a :href="item.url" :target="item.target">
							<img :src="item.image" width="1024" height="380">
						</a>
					</li>
				</transition-group>
				<div class="prev" v-show="changeBtn" @click="prevPlay">
					<img src="./image/prev.png" height="36">
				</div>
				<div class="next" v-show="changeBtn" @click="nextPlay">
					<img src="./image/next.png" height="36">
				</div>
			</div>
			<div class="referral">
				<div class="title">导诊预约</div>
				<div class="wrap">
					<ul class="chooseSex">
						<li v-for="(sex,index) in sexs" class="sex" :class="{ selected: index===sexIndex }" @click="chooseSex(index)">{{ sex.msg }}</li>
					</ul>
					<ul class="imageSex">
						<li v-for="(sex,index) in sexs" class="image" v-show="index===imageIndex">
							<img :src="sex.img1">
							<img :src="sex.img2">
						</li>
					</ul>
					<ul class="user-wrap">
						<li v-for="(user,index) in users" class="user">
							<img :src="user.image" class="userImg">
							<router-link to="/login" class="userLogin" @click.native="loginTo(index)">{{ user.msg }}</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<v-footer></v-footer>
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
				changeBtn: false,
				nowIndex: 0,
				sexIndex: 0,
				imageIndex: 0,
				list: 'listNext',
				timer: '',
				items: [
					{
						url: '',
						target: '_self',
						image: require('./image/jkgl.png')
					},
					{
						url: 'http://www.szcdc.net/rdzt/grxfx/',
						target: '_blank',
						image: require('./image/grfx.png')
					},
					{
						url: 'http://www.szcdc.net/rdzt/lgzs/',
						target: '_blank',
						image: require('./image/lgzs.png')
					}
				],
				sexs: [
					{
						msg: '男',
						img1: require('./image/man1.png'),
						img2: require('./image/man2.png')
					},
					{
						msg: '女',
						img1: require('./image/woman1.png'),
						img2: require('./image/woman2.png')
					},
					{
						msg: '童',
						img1: require('./image/child1.png'),
						img2: require('./image/child2.png')
					}
				],
				users: [
					{
						msg: '市民用户',
						image: require('./image/yhdl.png')
					},
					{
						msg: '医生用户',
						image: require('./image/ysyh.png')
					},
					{
						msg: '机构用户',
						image: require('./image/jgyh.png')
					}
				]
			}
		},
		created() {
			this.$nextTick(() => {
				this.timer = setInterval(() => {
					this.nextPlay()
				},8000)
			})
		},
		methods: {
			playBanner() {
				this.changeBtn = false
				this.timer = setInterval(() => {
					this.nextPlay()
				},8000)
			},
			stopBanner() {
				this.changeBtn = true
				clearInterval(this.timer)
				this.timer = null
			},
			nextPlay() {
				this.list = 'listNext'
				this.nowIndex ++
				if(this.nowIndex > this.items.length - 1){
					this.nowIndex = 0
				}
			},
			prevPlay() {
				this.list = 'listPrev'
				this.nowIndex --
				if(this.nowIndex < 0){
					this.nowIndex = this.items.length - 1
				}
			},
			chooseSex(index) {
				this.sexIndex = index
				this.imageIndex = index
			},
			loginTo(index) {
				if(index === 0){
					bus.$emit('userLogin')
				}
				if(index === 1){
					bus.$emit('doctorLogin')
				}
				if(index === 2){
					bus.$emit('hospitalLogin')
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
	.homepage
		width 100%
		.homepage-content
			margin 10px auto 30px
			width 1024px
			.nav
				width 100%
				height 85px
				font-size 16px
				text-align center
				li
					float left
					width 146px
					height 85px
					&.single
						background-color #2773af
					&.double
						background-color #66a8de
					.router
						display block
						margin-top 16px
						width 100%
						color #fff
						img
							margin-bottom 6px
			.banner
				position relative
				width 1022px
				height 380px
				overflow hidden
				.wrap
					width 100%
					height 380px
					li
						position absolute
						width 100%
						height 380px
						&.listNext-enter-active 
							transition all 1s ease
							transform translateX(0)
						&.listNext-leave-active 
							transition all 1s ease
							transform translateX(-100%)
						&.listNext-enter 
							transform translateX(100%)
						&.listNext-leave 
							transform translateX(0)
						&.listPrev-enter-active 
							transition all 1s ease
							transform translateX(0)
						&.listPrev-leave-active 
							transition all 1s ease
							transform translateX(100%)
						&.listPrev-enter 
							transform translateX(-100%)
						&.listPrev-leave 
							transform translateX(0)
				.prev
					position absolute
					top 50%
					left 10px
					margin-top -18px
					cursor pointer
				.next
					position absolute
					top 50%
					right 10px
					margin-top -18px
					cursor pointer
			.referral
				margin-top 30px
				width 100%
				height 250px
				.title
					padding-left 12px
					width 100%
					height 20px
					border-left 4px solid #2773af
					line-height 20px
					font-size 20px
					color #2773af
					font-weight 700
				.wrap
					box-sizing border-box
					margin-top 22px
					padding-left 34px
					width 100%
					.chooseSex
						float left
						width 34px
						.sex
							margin-bottom 14px
							width 30px
							height 30px
							line-height 30px
							font-size 14px
							text-align center
							color #fff
							background-color #88b209
							border 2px solid #88b209
							border-radius 50%
							cursor pointer
							&.selected
								color #2773af
								background-color #fff
								border 2px solid #2773af
					.imageSex
						float left
						width 256px
						img
							float left
							margin-left 34px
							cursor pointer
					.user-wrap
						float left
						margin-top 34px
						width 700px
						height 75px
						.user
							float left
							width 33%
							height 100%
							border-right 1px solid #2773af
							&:last-child
								border-right none
							&:nth-child(2)
								.userLogin
									background-color #2773af
							.userImg
								display block
								margin 0 auto
							.userLogin
								display block
								margin 10px auto
								padding 6px 0
								width 90px
								font-size 16px
								color #fff
								font-weight 700
								text-align center
								background-color #5cd431
								border-radius 3px
</style>
