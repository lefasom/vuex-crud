<template>
  <div>
    <Img :imageUrl="imageUrl" />
    <h1>Home</h1>
    <router-link to="/lista">Lista</router-link>

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
  