<template>
    <div class="container">
        <div class="row justify-content-center align-items-center vh-100">

            <!--Etapa 1-->
            <div v-if="etapa == 1" class="card card-forms">
                <div class="card-body">
                    <h5 class="card-title mb-4">Agendar Tour</h5>
                    <div v-if="mensagem_alerta" class="mt-3 mb-3 text-center alert" :class="mensagem_alerta.status">
                        <i :class="mensagem_alerta.icone"></i> {{ mensagem_alerta.mensagem }}
                    </div>
                    <form @submit.prevent="validarFormulario">
                        <div class="row mb-4">
                            <div class="col-md-6 mb-4">
                                <label for="nome" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="name" v-model="form.nome"
                                    placeholder="Digite seu nome">
                            </div>
                            <div class="col-md-6">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" v-model="form.email"
                                    placeholder="Digite seu email">
                            </div>
                            <div class="col-md-6 mt-4">
                                <label for="local_origem" class="form-label">Local de Origem</label>
                                <select class="form-select" v-model="form.local_origem">
                                    <option selected disabled>Informe seu local de origem</option>
                                    <option v-for="o in origem" :key="o.id">{{ o.cidade }}</option>
                                </select>
                            </div>
                            <div class="col-md-6 mt-4">
                                <label for="destino" class="form-label">Destino</label>
                                <select class="form-select" v-model="form.destino">
                                    <option selected disabled>Informe seu destino</option>
                                    <option v-for="d in destino" :key="d.id">{{ d.cidade }}</option>
                                </select>
                            </div>
                            <div class="col-md-6 mt-4">
                                <label for="data_ida" class="form-label">Data de ida</label>
                                <input type="date" class="form-control" v-model="form.data_ida">
                            </div>
                            <div class="col-md-6 mt-4">
                                <label for="data_volta" class="form-label">Data de volta</label>
                                <input type="date" class="form-control" v-model="form.data_volta">
                            </div>
                        </div>
                        <div class="d-flex justify-content-end mt-4">
                            <button type="submit" class="btn btn-danger">Agendar</button>
                        </div>
                    </form>
                </div>
            </div>

            <!--Etapa 2-->
            <div v-if="etapa == 2" class="card card-forms">
                <div class="card-body">
                    <h5 class="card-title mb-4">Realizar pagamento valor: R$0,01</h5>
                    <div v-if="mensagem_alerta" class="mt-3 mb-3 text-center alert" :class="mensagem_alerta.status">
                        <i :class="mensagem_alerta.icone"></i> {{ mensagem_alerta.mensagem }}
                    </div>
                    <form @submit.prevent="validarFormulario">
                        <div class="d-flex justify-content-center p-4 mt-4">
                            <button type="submit" class="btn btn-primary me-2"><i class="fa-brands fa-pix"></i> Realizar
                                Pagamento via Pix</button>
                            <button type="submit" class="btn btn-secondary"><i class="fa-brands fa-stripe"></i> Realizar
                                Pagamento via Stripe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import axios from 'axios'
import { Alerta } from '@/utils/Alerta'

@Options({
})

export default class AgendarTour extends Vue {

    mensagem_alerta: Alerta | null = null

    etapa = 1

    form = {
        nome: '',
        email: '',
        local_origem: '',
        destino: '',
        data_ida: '',
        data_volta: ''
    }

    origem = [
        { id: 1, cidade: 'Turim' },
        { id: 2, cidade: 'Nápoles' },
        { id: 3, cidade: 'Gênova' },
        { id: 4, cidade: 'Bolonha' }
    ]

    destino = [
        { id: 1, cidade: 'Roma' },
        { id: 2, cidade: 'Milão' },
        { id: 3, cidade: 'Veneza' },
        { id: 4, cidade: 'Florença' }
    ]

    public validarFormulario() { //verificar se todos os campos foram preenchidos

        if (
            this.form.nome === '' ||
            this.form.email === '' ||
            this.form.local_origem === '' ||
            this.form.destino === '' ||
            this.form.data_ida === '' ||
            this.form.data_volta === ''
        ) {

            this.mostrarMensagemAlerta('fa-solid fa-triangle-exclamation', 'Preencha todos os campos!', 'alert-danger')

        } else if (!this.validarEmail(this.form.email)) {

            this.mostrarMensagemAlerta('fa-solid fa-triangle-exclamation', 'Insira um e-mail válido!', 'alert-danger')

        } else if (this.form.data_ida > this.form.data_volta) {

            this.mostrarMensagemAlerta('fa-solid fa-circle-exclamation', 'A data de volta não pode ser anterior a data de ida!', 'alert-info')

        } else {
            this.agendarTour()
        }

    }

    async agendarTour() { //agendar Tour

        try {

            const response = await axios.post('http://localhost:3000/api/agendamentos', this.form)

            this.mostrarMensagemAlerta('fa-solid fa-check', 'Tour agendado com sucesso! Agora basta realizar o pagamento.', 'alert-success')
            // Limpar o formulário após o envio
            this.limparFormulario()

            //próxima etapa
            this.proximaEtapa()

        } catch (error) {
            this.mostrarMensagemAlerta('fa-solid fa-triangle-exclamation', 'Erro ao agendar o tour', 'alert-danger')
        }
    }

    private mostrarMensagemAlerta(icone: string, mensagem: string, status: string) { //mensagem Alerta
        this.mensagem_alerta = { icone, mensagem, status }
        setTimeout(() => {
            this.mensagem_alerta = null
        }, 5000) // Remover a mensagem após 5 segundos
    }

    private validarEmail(email: string): boolean { //verificar se o email inserido é válido
        // Expressão regular para validar e-mail
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)

    }

    private proximaEtapa() { //próxima etapa
        this.etapa +=1
    }

    private limparFormulario() { //Limpar formulário

        this.form = {
            nome: '',
            email: '',
            local_origem: '',
            destino: '',
            data_ida: '',
            data_volta: ''
        }

    }
}
</script>