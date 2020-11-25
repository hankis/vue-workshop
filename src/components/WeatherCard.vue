<template>
    <v-card v-if="card">
        <v-card-title class="d-block" >
        <h4 class="text-center">{{card.address.city}}</h4>
        </v-card-title>

        <v-card-text >
        <p>{{ card.name }}</p>
        <h1>{{ card.phone }}</h1>
        <p>{{  card.username }}</p>
        <p>{{ card.website }} </p>

        </v-card-text>
  </v-card>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'WeatherCard',
    computed: {
        ...mapGetters({
            card: 'card/getCard',
        }),
    },
    mounted() {
        this.fetchCard();
    },
    methods: {
        ...mapActions({
            fetchCard: 'card/fetchCard',
        }),
    },
};
</script>

<style scoped>

</style>
