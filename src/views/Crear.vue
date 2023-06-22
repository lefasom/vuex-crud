<template>
     <div class="text-center">
      <router-link to="/lista" class="btn btn-primary">Ir a la Lista</router-link>
      <h1>Crear</h1>
      <div class="form-group">
        <input class="form-control" v-on:keyup.enter="add" v-model="item.nombre" placeholder="Nombre">
      </div>
      <div class="form-group">
        <input class="form-control" v-on:keyup.enter="add" v-model="item.edad" placeholder="Edad">
      </div>
      <p>{{ personaje }}</p>
      <button class="btn btn-primary" v-on:click="add">Agregar</button>
      <div v-for="(item, index) of lista" :key="index" class="mt-3">
        {{ index }} - Nombre: {{ item.nombre }} - Edad: {{ item.edad }}
        <button class="btn btn-danger" v-on:click="eliminar(index)">Eliminar</button>
      </div>
    </div>
  </template>
     
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {

    name: 'crear',

    setup() {
        const store = useStore();
        const router = useRouter();
        const item = ref({ nombre: '', edad: '' })

        const add = () => {
            if (item.value) {
                store.dispatch('addItem', item.value);
                router.push('/lista');
            }
        }
        return {
            item,
            add,
        }
    },
}
</script>
