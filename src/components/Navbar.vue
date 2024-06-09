<template>
    <nav class="navbar navbar-expand-lg navbar-italia-tour">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/"><img src="../assets/logo.png" class="img-fluid">Italia Tour</router-link>
            <button style="background-color: white;" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" :class="{ active: $route.path === '/' }" class="nav-link"><i
                                class="fa-solid fa-house"></i> Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/tours" :class="{ active: $route.path === '/tours' }" class="nav-link"><i
                                class="fa-solid fa-train"></i> Tours</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/gastronomia" :class="{ active: $route.path === '/gastronomia' }"
                            class="nav-link"><i class="fa-solid fa-pizza-slice"></i>
                            Gastronomia</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/agendar-tour" :class="{ active: $route.path === '/agendar-tour' }"
                            class="nav-link"><i class="fa-solid fa-calendar-days"></i>
                            Agendar
                            Tour</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({

})
export default class Navbar extends Vue {

}
</script>

<style lang="scss">
@import '../scss/navbar';
</style>