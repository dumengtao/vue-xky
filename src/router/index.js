import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/homepage/homepage.vue'
import inConstruction from '@/components/inConstruction/inConstruction.vue'
import login from '@/components/login/login.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{ path: '/', redirect: '/xky' },
		{ path: '/xky', component: homePage },
		{ path: '/inConstruction', component: inConstruction },
		{ path: '/login', component: login }
	],
	linkActiveClass: 'active'
})
