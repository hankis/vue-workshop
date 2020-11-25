<template>
    <transition mode="out-in" name="fade">
        <v-form v-if="selectedTodo"
            ref="form"
            lazy-validation
        >
            <v-text-field
                v-model="selectedTodo.title"
                :label="$t('title')"
                required
            ></v-text-field>

            <v-checkbox
                v-model="selectedTodo.completed"
                :label="$t('done')"
            ></v-checkbox>

            <v-btn @click="close"
                color="success"
                class="mr-4"
                v-t="'close'"/>
        </v-form>
    </transition>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'TodoCardNew',
    data: () => ({
		todo: null,
	}),
    computed: {
        ...mapGetters({
           selectedTodo: 'todo/selectedTodo',
        }),
    },
    methods: {
        ...mapMutations({
            unselectTodo: 'todo/unselectTodo',
        }),
        close() {
            this.unselectTodo();
            this.todo = null;
        },
    },
};
</script>
