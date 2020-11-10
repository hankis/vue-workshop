<template>
  <div class="home">
  </div>
</template>

<script>

const API_URL = 'https://jsonplaceholder.typicode.com';

export default {
	name: 'Home',
	mounted() {
		this.getTodoList();
	},
	methods: {
		getTodoList() {
			fetch(`${API_URL}/todos`)
				.then((response) => response.json())
				.then((json) => console.log(json));
		},
	},
};
</script>
