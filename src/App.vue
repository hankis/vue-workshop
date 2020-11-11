<template>
  <div id="app">
    <navigation :routes="routes"/>
    <div class="container">
      <div class="row">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
	data: () => ({
		routes: [],
	}),

	components: {
		Navigation,
	},
};
</script>

<style>
.container {
  padding: 2rem 0;
}
</style>
