<template>
    <footer>
        <div class="footer-italia-tour">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h4><router-link class="navbar-brand" to="/"><img src="../assets/logo.png"
                                    class="img-fluid">Italia Tour</router-link></h4>
                    </div>
                    <div class="col-md-6">
                        <h4><i class="fa-solid fa-phone"></i> Contato: +55 (99) 99999-9999</h4>
                    </div>
                    <div class="col-md-12">
                        <h4>Todos os direitos reservados - 2024</h4>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({

})
export default class Footer extends Vue {

}
</script>

<style lang="scss">
@import '../scss/footer';
</style>