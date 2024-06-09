<template>
    <div>
        <div class="texto-tours">
            <h2>Alguns de nossos tours</h2>
        </div>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 mb-4 g-4">
                <div class="col" v-for="tour in tours" :key="tour.id">
                    <div class="card">
                        <img :src="require(`../assets/imgs/${tour.imagem}.jpg`)" class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">{{ tour.titulo }}</h5>
                            <p class="card-text">{{ tour.texto }}</p>
                        </div>
                        <div class="mb-2 mx-2 d-flex justify-content-end align-items-end">
                            <button class="btn btn-tour" @click="viewDetails(tour)">Ver mais detalhes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapActions, mapGetters } from 'vuex'
import { Tour } from '@/store'

@Options({

    computed: {
        ...mapGetters(['allTours'])
    },

    methods: {
        ...mapActions(['selectTour'])
    },
})

export default class Tours extends Vue {

    viewDetails(tour: Tour) { //ver detalhes do tour
        (this as any).selectTour(tour)
        this.$router.push({ name: 'TourDetails', params: { id: tour.id } })
    }

    get tours(): Tour[] {
        return (this as any).allTours as Tour[]
    }

}
</script>

<style lang="scss">
@import '../scss/tours';
</style>