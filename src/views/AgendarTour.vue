<template>
    <div class="container">
        <div class="row justify-content-center align-items-center vh-100">
            <div class="card card-forms">
                <div class="card-body">
                    <h5 class="card-title mb-4">Agendar Tour</h5>
                    <form @submit.prevent="">
                        <div class="row mb-4">
                            <div class="col-md-6 mb-4">
                                <label for="name" class="form-label">Nome</label>
                                <input type="text" class="form-control" name="nome" id="nome"
                                    placeholder="Digite seu nome">
                            </div>
                            <div class="col-md-6 ">
                                <label for="email" class="form-label">Email</label>
                                <input type="select" class="form-control" name="email" id="email"
                                    placeholder="Digite seu email">
                            </div>
                            <div class="col-md-6 mt-4">
                                <label for="local_origem" class="form-label">Local de Origem</label>
                                <select class="form-select" aria-label="local_origem" id="local_origem">
                                    <option selected disabled>Informe seu local de origem</option>
                                    <option v-for="o in origem" :key="o.id">{{ o.cidade }}</option>
                                </select>
                            </div>
                            <div class="col-md-6 mt-4">
                                <label for="destino" class="form-label">Destino</label>
                                <select class="form-select" aria-label="local_origem" id="local_origem">
                                    <option selected disabled>Informe seu destino</option>
                                    <option v-for="d in destino" :key="d.id">{{ d.cidade }}</option>
                                </select>
                            </div>
                            <div class="col-md-6 mt-4">
                                <label for="data_ida" class="form-label">Data de ida</label>
                                <input type="date" class="form-control" id="data_ida">
                            </div>
                            <div class="col-md-6 mt-4">
                                <label for="data_volta" class="form-label">Data de volta</label>
                                <input type="date" class="form-control" id="data_volta">
                            </div>
                        </div>
                        <div class="d-flex justify-content-end mt-4">
                            <button type="submit" class="btn btn-danger">Agendar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({

})

export default class AgendarTour extends Vue {

    origem = [
        {id: 1, cidade: 'Turim'},
        {id: 2, cidade: 'Nápoles'},
        {id: 3, cidade: 'Genova'},
        {id: 4, cidade: 'Bolonha'}
    ]

    destino = [
        {id: 1, cidade: 'Roma'},
        {id: 2, cidade: 'Milão'},
        {id: 3, cidade: 'Veneza'},
        {id: 4, cidade: 'Florença'}
    ]

}

</script>