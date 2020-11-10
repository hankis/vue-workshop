<template>
  <div id="app">
    <navigation :routes="routes"/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
	data: () => ({
		routes: [
			{
				label: 'Lesson 1 HW',
				link: {
					name: 'l1',
				},
			},
		],
	}),

	components: {
		Navigation,
	},
};
</script>

<style>

</style>
