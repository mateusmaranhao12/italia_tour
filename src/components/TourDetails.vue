<template>
    <div v-if="tour">
        <div class="tour-details-text">
            <h1>{{ tour.titulo }}</h1>
        </div>
        <div class="tour-details">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mt-5">
                        <img class="img-fluid" :src="require(`../assets/imgs/${tour.imagem}.jpg`)" alt="Imagem do tour">
                    </div>
                    <div class="col-md-6 d-flex align-self-center justify-content-center">
                        <h3>{{ tour.texto }}</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="tour-details2">
            <div class="container">
                <div class="row">
                    <div class="col mt-5 mb-5">
                        <h2>Pontos turísticos de {{ tour.titulo }}</h2>
                    </div>
                    <div class="container">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5 mb-5">
                            <div class="col" v-for="point in tourPoints" :key="point.nome">
                                <div class="card h-100">
                                    <img :src="require(`../assets/imgs/${point.imagem}.jpg`)" class="card-img-top"
                                        alt="Imagem do ponto turístico">
                                    <div class="card-body">
                                        <h5 class="card-title">{{ point.nome }}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <p>Carregando...</p>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapGetters, mapActions } from 'vuex'
import { Tour } from '@/store'

@Options({
    computed: {
        ...mapGetters(['selectedTour', 'allTours']),
    },
    methods: {
        ...mapActions(['selectTour']),
    }
})
export default class TourDetails extends Vue {

    get tour(): Tour | null {
        return (this as any).selectedTour as Tour | null
    }

    get tourPoints() { //mostrar os TourPoints
        return [
            { nome: this.tour?.nome1, imagem: this.tour?.tour1 },
            { nome: this.tour?.nome2, imagem: this.tour?.tour2 },
            { nome: this.tour?.nome3, imagem: this.tour?.tour3 },
            { nome: this.tour?.nome4, imagem: this.tour?.tour4 },
            { nome: this.tour?.nome5, imagem: this.tour?.tour5 },
        ].filter(point => point.nome && point.imagem)
    }

    mounted() { //acessando os dados do vuex
        const id = this.$route.params.id;
        const tour = (this as any).allTours.find((t: Tour) => t.id === Number(id))
        if (tour) {
            (this as any).selectTour(tour)
        }
    }
}
</script>

<style lang="scss">
@import '../scss/tour_details.scss';
</style>
