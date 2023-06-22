<template>
     <div class="text-center">
      <router-link to="/lista" class="btn btn-primary">Ir a la Lista</router-link>
      <h1 class="mt-3">Editar</h1>
      <div class="form-group">
        <input class="form-control" v-on:keyup.enter="editar" v-model="item.nombre" placeholder="Nombre">
      </div>
      <div class="form-group">
        <input class="form-control" v-on:keyup.enter="editar" v-model="item.edad" placeholder="Edad">
      </div>
      <p>{{ item }}</p>
      <button class="btn btn-primary" v-on:click="editar">Editar</button>
    </div>
  </template>
  
<script>
import { onMounted, computed } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {

    name: 'editar',

    setup() {
        const store = useStore();
        const item = computed(() => store.state.individual);
        // console.log(item)
        const route = useRouter();
        const id = route.currentRoute._value.params.itemId;

        const editar = async () => {
            if (item.value) {
                try {
                    store.dispatch('updateItem', { id, item });
                    route.push('/lista');
                } catch (error) {
                    console.error('Error al editar el elemento:', error);
                }
            }
        }

        onMounted(async () => {
            await store.dispatch('fetchIndividual', id)
        })

        return {
            editar,
            item
        }
    },
}
</script>
