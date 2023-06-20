<template>
    <input v-on:keyup.enter='agregar' v-model="personaje.nombre">
    <input v-on:keyup.enter='agregar' v-model="personaje.edad">
    <p>{{ personaje }}</p>
    <button v-on:click="agregar">agregar</button>
    <div v-for="(item, index) of lista" :key="index">
        {{ index }} - Nombre: {{ item.nombre }} - Edad: {{ item.edad }}
        <button v-on:click="eliminar(index)">eliminar</button>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    name: 'listaDeElementos',
    setup() {
        const lista = ref([])
        const personaje = ref({ nombre: '', edad: '' })

        const agregar = () => {
            if (personaje.value.nombre && personaje.value.edad) {
                lista.value = [...lista.value, { nombre: personaje.value.nombre, edad: personaje.value.edad }];
                personaje.value = { nombre: '', edad: '' };
                localStorage.setItem('DB_STORAGE_CRUD', JSON.stringify(lista.value))
            }
        }

        const eliminar = (index) =>{
            lista.value.splice(index, 1)
            localStorage.setItem('DB_STORAGE_CRUD', JSON.stringify(lista.value))
        }

        onMounted(() => {
            let datosDB = JSON.parse(localStorage.getItem('DB_STORAGE_CRUD'))
            if (datosDB === null) {
                lista.value = []
            } else {
                lista.value = datosDB
            }
        })

        return {
            lista,
            personaje,
            eliminar,
            agregar,
        }
    },
}
</script>
