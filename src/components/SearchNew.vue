<template>
    <v-text-field
        label="Search in list"
        hide-details="auto"
        :placeholder="$t('typeValue')"
        @input="onInput"
    ></v-text-field>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    name: 'SearchNew',

	methods: {
        ...mapMutations({
            onInput: 'todo/changeSearchValue',
        }),
	},
};
</script>

<style>

</style>
