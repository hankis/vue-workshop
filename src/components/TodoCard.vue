<template>
  <div>
		<h2>Selected TODO</h2>
		<div class="card border-secondary mb-3" style="max-width: 20rem;">
			<div class="card-header">Editing form</div>
			<div class="card-body">
				<div class="form-group">
					<label class="col-form-label" for="inputDefault">Title</label>
					<input type="text"
								class="form-control"
								placeholder="Default input"
								v-model="todo.title"
								>
					<br>
					<div class="custom-control custom-checkbox">
						<input type="checkbox"
									class="custom-control-input"
									id="ch-new"
									v-model="todo.completed">
						<label class="custom-control-label" for="ch-new">Done</label>
					</div>
					<br>
					<div>
						<button class="btn btn-warning col-12" @click="closeEditing">Save & close</button>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
	name: 'TodoCard',
	props: {
		selectedTodo: Object,
	},
	model: {
		prop: 'selectedTodo',
	},
	data: () => ({
		todo: {},
	}),
	mounted() {
		this.todo = this.selectedTodo;
	},
	methods: {
		closeEditing() {
			this.$emit('close');
		},
	},
};
</script>
