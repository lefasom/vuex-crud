<template>
    <router-link to="/lista">Ir a la Lista</router-link>
    <h1>Crear </h1>
    <input v-on:keyup.enter='add' v-model="item.nombre">
    <input v-on:keyup.enter='add' v-model="item.edad">
    <p>{{ personaje }}</p>
    <button v-on:click="add">agregar</button>
    <div v-for="(item, index) of lista" :key="index">
        {{ index }} - Nombre: {{ item.nombre }} - Edad: {{ item.edad }}
        <button v-on:click="eliminar(index)">eliminar</button>
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
