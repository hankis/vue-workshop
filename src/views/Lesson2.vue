/* eslint-disable vue/valid-v-for */
<template>
	<div class="container">
    <div class="row">
      <div class="col-8">
        <search v-model="search"/>
      </div>
    </div>
		<div class="row">
			<div class="col-8">
				<h2>TODO List</h2>
				<table class="table table-hover">
					<thead>
						<tr>
							<th scope="col">Title</th>
							<th scope="col">Completed</th>
							<th scope="col">
                <button class="btn btn-info" @click="addNew">Add new +</button>
								<button class="btn btn-default" @click="changePaginationMode">
									Mode: {{paginationMode}}
								</button>
              </th>
						</tr>
					</thead>
					<transition-group tag="tbody" name="fade">
						<tr class="tab-row"
								v-for="todo in itemsOnPage"
								:key="todo.id"
								:class="[todo.completed? 'table-success' : 'table-default']">
									<td scope="row" :is="'list-item'">
										<template slot="warning" v-if="isUrgently(todo.title)">Urgently!</template>
										<a href="" @click.prevent="editTodo(todo)">
											{{todo.title}}
										</a>
									</td>
									<td>
										<div class="custom-control custom-checkbox">
											<input type="checkbox"
														class="custom-control-input"
														:id="`ch${todo.id}`"
														v-model="todo.completed">
											<label class="custom-control-label" :for="`ch${todo.id}`">
												{{todo.completed ? 'Done!': 'Not completed' }}
											</label>
										</div>
									</td>
									<td>
										<button class="btn btn-danger del-btn" @click="removeTodo(todo.id)">x</button>
									</td>
							</tr>
					</transition-group>
				</table>
        <pagination v-if="paginationMode == 'pages'" :pages="pages" v-model="currentPage"/>
				<infinity-loader v-else-if="currentPage < pages" @load="loadNextLazy" />
			</div>
			<div class="col-4">
				<transition mode="out-in" name="fade">
					<todo-card
						v-if="selectedTodo"
						v-model="selectedTodo"
						@close="closeEditing"
						:key="selectedTodo.id"/>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>

import API from '@/api/api';

import Search from '@/components/Search.vue';
import TodoCard from '@/components/TodoCard.vue';
import Pagination from '@/components/Pagination.vue';
import InfinityLoader from '@/components/InfinityLoader.vue';
import ListItem from '@/components/ListItem.vue';

export default {
	name: 'Lesson1',

	data: () => ({
		todos: [],
		search: '',
		currentPage: 1,
		selectedTodo: null,
		itemsByPage: 10,
		paginationMode: 'infinity',
		timeout: null,
	}),

	computed: {
		seachResults() {
			if (!this.search) {
				return this.todos;
			}
			return this.todos.filter((item) => item.title.includes(this.search));
		},
		pages() {
			return this.seachResults ? Math.ceil(this.seachResults.length / 10) : 1;
		},
		itemsOnPage() {
			return this.seachResults.filter((item, idx) => this.isShowOnList(idx));
		},
	},

	mounted() {
		this.getTodoList();
	},

	beforeDestroy() {
		clearTimeout(this.timeout);
	},

	watch: {
		search(newV, oldV) {
			if (newV && newV !== oldV) {
					this.currentPage = 1;
			}
		},
	},

	methods: {
		isUrgently(value) {
			return value.toLowerCase().includes('срочно') || value.toLowerCase().includes('urgently');
		},

		addNew() {
			this.todos.push({
				id: this.todos[this.todos.length - 1].id + 5,
				title: '',
				completed: false,
			});
			this.selectedTodo = this.todos[this.todos.length - 1];
		},

		editTodo(todo) {
			this.selectedTodo = todo;
		},

		removeTodo(id) {
			this.todos.forEach((el, i) => {
				if (el.id === id) {
						this.todos.splice(i, 1);
				}
			});
		},

		closeEditing() {
			this.selectedTodo = null;
		},

		isShowOnList(index) {
			let minIndex;
			if (this.paginationMode === 'pages') {
				minIndex = this.currentPage * this.itemsByPage - this.itemsByPage;
			} else {
				minIndex = 0;
			}
			const maxIndex = this.currentPage * this.itemsByPage;
			return index >= minIndex && index < maxIndex;
		},

		changePaginationMode() {
			this.currentPage = 1;
			this.paginationMode = this.paginationMode === 'pages' ? 'infinity' : 'pages';
			this.itemsByPage = this.paginationMode === 'pages' ? 10 : 20;
		},

		async getTodoList() {
			const data = await API.getTodoList();
			if (data.length) {
					this.todos = data;
					this.currentPage = 1;
			}
		},
		loadNextLazy() {
			if (this.currentPage < this.pages) {
				this.timeout = setTimeout(() => {
						this.currentPage += 1;
				}, 2000);
			}
		},
	},
	components: {
		Search,
		TodoCard,
		Pagination,
		InfinityLoader,
		ListItem,
	},
};
</script>

<style>
.tab-row .del-btn {
  padding: 0;
  height: 25px;
  width: 25px;
  display: none;
}
.tab-row:hover .del-btn {
  display: block;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
