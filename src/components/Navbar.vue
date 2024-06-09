<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Italia Tour</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link"><i class="fa-solid fa-house"></i> Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/tours" class="nav-link"><i class="fa-solid fa-train"></i> Tours</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/gastronomia" class="nav-link"><i class="fa-solid fa-pizza-slice"></i>
                            Gastronomia</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/agendar-tour" class="nav-link"><i class="fa-solid fa-calendar-days"></i> Agendar
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