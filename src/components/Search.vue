<template>
	<div>
		<h2>Search in list</h2>
			<div class="form-group">
			<input class="form-control form-control-lg"
					type="text"
					placeholder="type a value..."
					:value="value"
					@input="onInput">
		</div>
	</div>
</template>

<script>
export default {
	name: 'Search',
	props: {
		value: String,
	},
	model: {
    prop: 'value',
    event: 'change',
  },
	methods: {
		onInput(ev) {
			this.$emit('change', ev.target.value);
		},
	},
};
</script>

<style>

</style>
