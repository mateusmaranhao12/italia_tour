<template>
    <div class="boas-vindas">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2>Bem vindo ao Itália Tour!!!</h2>
                    <h4>O Tour na Itália é uma boutique de experiências exclusivas na Itália em português.</h4>
                    <h4>Temos diversos passeios para Roma, Veneza, Milão e Florença!</h4>
                    <p>Venha realizar sua viagem dos sonhos conosco!!!</p>
                </div>
            </div>
        </div>
    </div>

    <!--Roma-->
    <div class="texto-secao-tours">
        <h2>Roma</h2>
    </div>
    <div class="secao-tours">
        <div class="container">
            <div class="row">
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                    <p>Venha conhecer a grande cidade histórica de Roma, que pode contar com diversos pontos turísticos
                        históricos, como o famoso Coliseu e a famosa Fontana di Trevi. Roma, a capital da Itália, é uma
                        cidade cosmopolita, enorme, com quase 3.000 anos de arte, arquitetura e cultura influentes no
                        mundo todo e à mostra. Ruínas antigas como o Fórum e o Coliseu evocam o poder do antigo Império
                        Romano. A Cidade do Vaticano, sede da Igreja Católica Romana, tem a Basílica de São Pedro e os
                        museus do Vaticano, que abrigam obras-primas como os afrescos da Capela Sistina de Michelângelo.
                    </p>
                </div>
                <div class="col-md-6">
                    <img class="img-fluid" src="../assets/imgs/roma.jpg">
                </div>
            </div>
        </div>
    </div>

    <!--Milão-->
    <div class="texto-secao-tours">
        <h2>Milão</h2>
    </div>
    <div class="secao-tours">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img class="img-fluid" src="../assets/imgs/milao.jpg">
                </div>
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                    <p>Milão, uma metrópole na região da Lombardia ao norte da Itália, é uma capital mundial da moda e
                        do design. Cidade da bolsa de valores nacional, trata-se de um centro financeiro também
                        conhecido pelas suas lojas e pelos seus restaurantes sofisticados. A catedral Gothic Duomo di
                        Milano e o convento Santa Maria delle Grazie, onde está o mural de Leonardo da Vinci "A Última
                        Ceia", são testemunhas de séculos de arte e cultura.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!--Veneza-->
    <div class="texto-secao-tours">
        <h2>Veneza</h2>
    </div>
    <div class="secao-tours">
        <div class="container">
            <div class="row">
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                    <p>Veneza, a capital da região de Vêneto, no norte da Itália, é formada por mais de 100 pequenas
                        ilhas em uma lagoa no Mar Adriático. A cidade não tem estradas, apenas canais (como a via Grand
                        Canal), repletos de palácios góticos e renascentistas. Na praça central, Piazza San Marco, ficam
                        a Basílica de São Marcos, coberta de mosaicos bizantinos, e o campanário, com vista para os
                        telhados vermelhos da cidade.
                    </p>
                </div>
                <div class="col-md-6">
                    <img class="img-fluid" src="../assets/imgs/veneza.jpg">
                </div>
            </div>
        </div>
    </div>

    <!--Florença-->
    <div class="texto-secao-tours">
        <h2>Florença</h2>
    </div>
    <div class="secao-tours">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img class="img-fluid" src="../assets/imgs/florenca.jpg">
                </div>
                <div class="col-md-6 d-flex justify-content-center align-items-center">
                    <p>Florença, capital da região Toscana, na Itália, abriga muitas obras de arte e arquitetura
                        renascentistas. Um dos seus pontos turísticos mais emblemáticos é o Duomo, catedral com cúpula
                        de telhas de terracota, projetada por Brunelleschi, e o campanário de Giotto. A Galleria
                        dell'Accademia exibe a escultura "Davi", de Michelangelo. A Galeria Uffizi exibe "O Nascimento
                        de Vênus", de Botticelli, e "A Anunciação" de Da Vinci.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({

})
export default class Home extends Vue {

}
</script>

<style lang="scss">
@import '../scss/home.scss';
</style>