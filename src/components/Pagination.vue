<template>
  <div>
		<div v-if="pages">
			<ul class="pagination pagination-sm">
				<li class="page-item">
					<a class="page-link" href="#" @click.prevent="prevPage">&laquo;</a>
				</li>
				<li class="page-item"
						v-for="i in pages"
						:key="i"
						:class="{'active': i == currentPage}">
					<a class="page-link" href="#" @click.prevent="selectPage(i)">{{i}}</a>
				<li class="page-item">
					<a class="page-link" href="#" @click.prevent="nextPage">&raquo;</a>
				</li>
			</ul>
		</div>
		<span v-else>No results</span>
  </div>
</template>

<script>
export default {
	props: {
		pages: Number,
		currentPage: Number,
	},
	model: {
		prop: 'currentPage',
		event: 'change',
	},
	methods: {
		selectPage(page) {
			this.$emit('change', page);
		},

		nextPage() {
			if (this.currentPage < this.pages) {
				this.selectPage(this.currentPage + 1);
			}
		},

		prevPage() {
			if (this.currentPage > 1) {
				this.selectPage(this.currentPage - 1);
			}
		},
	},
};
</script>
