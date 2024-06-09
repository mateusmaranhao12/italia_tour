<template>
  <div class="app-view">
    <navbar></navbar>
    <div class="main-content">
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Navbar from '../src/components/Navbar.vue'
import Footer from '../src/components/Footer.vue'

@Options({

  components: {
    Navbar, Footer
  }

})

export default class App extends Vue {

}

</script>

<style lang="scss">
.app-view {
  background-color: rgb(255, 255, 255);
  /* Cor cinza */
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

body::-webkit-scrollbar {
  width: 12px;
  /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: #2c0000;
  /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: #309700;
  /* color of the scroll thumb */
  border-radius: 20px;
  /* roundness of the scroll thumb */
  border: 3px solid #000000;
  /* creates padding around scroll thumb */
}
</style>