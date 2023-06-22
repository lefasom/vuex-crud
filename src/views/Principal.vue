<template>
  <div class="text-center">
    <img :src="imageUrl" class="img-fluid" alt="Imagen" /> <!-- Aplicando clase de Bootstrap "img-fluid" para una imagen responsiva -->
    <h1 class="mt-3">Home</h1> <!-- Aplicando clase de Bootstrap "mt-3" para un margen superior de tamaño medio -->
    <router-link to="/lista" class="btn btn-primary">Lista</router-link> <!-- Aplicando clases de Bootstrap para un botón primario -->
  </div>
</template>

  
<script>
import { ref } from 'vue'
import Img from '../components/Img.vue'
export default {
  components: {
    Img
  },
  setup() {
    const imageUrl = ref('https://tse3.mm.bing.net/th?id=OIP.gzRAs75siIbw4mMJq0TO4wAAAA&pid=Api&P=0&h=180');

    return {
      imageUrl
    };
    // Lógica del componente A
  }
}
</script>
  