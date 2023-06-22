<template>
     <div class="text-center">
      <router-link to="/">Ir a la Home</router-link> |
      <router-link to="/crear">Crear</router-link>
      <h1>Lista</h1>
      <div v-for="(item, index) of items" :key="index">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ item.value.nombre }}</td>
              <td>{{ item.value.edad }}</td>
              <td>
                <router-link :to="`/editar/${item.id}`" class="btn btn-primary">Editar</router-link>
                <button @click="deleteItem(index, item.id)" class="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
<style>
table {
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #333;
    width: 100px;
    text-align: center;
}
</style>
<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex';

export default {

    name: 'listaDeElementos',

    setup() {
        const store = useStore();
        const items = computed(() => store.state.items);

        const deleteItem = (index, id) => {
            store.dispatch('deleteItem', { index, id });
        }

        onMounted(async () => {
            await store.dispatch('fetchItems')
        })

        return {
            items,
            deleteItem,
        }
    },
}
</script>
