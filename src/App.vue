<template>
  <div class="app-view">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Navbar from '../src/components/Navbar.vue'

@Options({

  components: {
    Navbar
  }

})

export default class App extends Vue {

}

</script>