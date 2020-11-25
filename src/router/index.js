import Vue from 'vue';
import VueRouter from 'vue-router';
import Lesson1 from '@/views/Lesson1.vue';
import Lesson2 from '@/views/Lesson2.vue';
import Lesson3 from '@/views/Lesson3.vue';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/l1',
		name: 'l1',
		component: Lesson1,
	},
	{
		path: '/l2',
		name: 'l2',
		component: Lesson2,
	},
	{
		path: '/l3',
		name: 'l3',
		component: Lesson3,
	},
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '',
		redirectTo: '/',
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
