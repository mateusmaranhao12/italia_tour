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
                            <button class="btn btn-tour">Ver mais detalhes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Tours extends Vue {
    tours = [
        { id: 1, titulo: 'Roma', texto: 'lorem ipsum dolor sit amet', imagem: 'roma' },
        { id: 2, titulo: 'Milão', texto: 'lorem ipsum dolor sit amet', imagem: 'milao' },
        { id: 3, titulo: 'Veneza', texto: 'lorem ipsum dolor sit amet', imagem: 'veneza' },
        { id: 4, titulo: 'Florença', texto: 'lorem ipsum dolor sit amet', imagem: 'florenca' },
    ]
}
</script>

<style lang="scss">
@import '../scss/tours';
</style>