<template>
	<v-app>
		<v-container>
			<v-tabs v-model="tab">
				<v-tab :key="'todo'" v-t="'todoListTitle'"/>
				<v-tab :key="'weather'" v-t="'todayWeatherTitle'"/>
			</v-tabs>
			<v-tabs-items v-model="tab">
				<v-tab-item :key="'todo'">
					<v-container>
						<v-row>
								<v-col cols="8">
										<search-new/>
											<v-chip-group
												active-class="primary--text"
												@change="changeLocale"
												v-model="$i18n.locale"
												column>
												<v-chip
													v-for="locale in $i18n.availableLocales"
													:key="locale">{{ locale }}</v-chip>
											</v-chip-group>
								</v-col>
						</v-row>

						<v-row>
							<v-col cols="8">
								<v-simple-table>
									<thead>
										<tr>
												<th class="text-left" v-t="'title'"/>
												<th class="text-left" v-t="'completed'"/>
												<th class="text-right">
														<v-btn elevation="2" @click="addTodo">{{$t('addNew')}} +</v-btn>
												</th>
										</tr>
									</thead>
									<tbody>
										<tr class="tab-row"
												v-for="todo in itemsOnPage"
												:key="todo.id"
												:class="[todo.completed? 'table-success' : 'table-default']">
											<td scope="row" :is="'list-item'">
												<template slot="warning"
																	v-if="isUrgently(todo.title)"
												>{{$t('urgently')}}!</template>
												<a href="" @click.prevent="selectTodo(todo)">
														{{todo.title}}
												</a>
											</td>
											<td>
												<v-switch v-model="todo.completed" :label="$t('done')"/>
											</td>
											<td class="text-right">
												<v-btn class="del-btn"
														fab
														x-small
														outlined
														rounded
														@click="removeTodo(todo.id)">x</v-btn>
											</td>
										</tr>
									</tbody>
								</v-simple-table>
								<v-pagination
									v-model="currentPage"
									:length="pages"
								></v-pagination>
							</v-col>
							<v-col col="4">
								<todo-card-new/>
							</v-col>
						</v-row>
					</v-container>
				</v-tab-item>
				<v-tab-item :key="'weather'">
					<async-weather/>
				</v-tab-item>
			</v-tabs-items>
		</v-container>
	</v-app>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

import SearchNew from '@/components/SearchNew.vue';
import ListItem from '@/components/ListItem.vue';
import TodoCardNew from '@/components/TodoCardNew.vue';
import AsyncWeather from '../components/AsyncWeather';

export default {
	data: () => ({
		tab: 'todo',
		currentPage: 1,
		itemsByPage: 10,
	}),
	computed: {
		...mapGetters({
			seachResults: 'todo/seachResults',
		}),
		pages() {
			return this.seachResults ? Math.ceil(this.seachResults.length / 10) : 1;
		},
		itemsOnPage() {
			return this.seachResults.filter((item, idx) => this.isShowOnList(idx));
		},
	},
	mounted() {
		this.loadTodoList();
	},
	methods: {
		...mapActions({
			loadTodoList: 'todo/loadTodoList',
		}),
		...mapMutations({
			removeTodo: 'todo/removeTodo',
			addTodo: 'todo/addTodo',
			selectTodo: 'todo/selectTodo',
		}),
		isShowOnList(index) {
			const minIndex = this.currentPage * this.itemsByPage - this.itemsByPage;
			const maxIndex = this.currentPage * this.itemsByPage;
			return index >= minIndex && index < maxIndex;
		},
		isUrgently(value) {
			return value.toLowerCase().includes('срочно') || value.toLowerCase().includes('urgently');
		},
		changeLocale(idx) {
			// console.log(this.$i18n.availableLocales[idx]);
			this.$i18n.locale = this.$i18n.availableLocales[idx];
		},
	},
	components: {
		SearchNew,
		ListItem,
		TodoCardNew,
		AsyncWeather,
	},
};
</script>

<style>
.v-application {
    width: 100%;
}
</style>
