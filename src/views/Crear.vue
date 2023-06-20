<template>
    <router-link to="/lista">Ir a la Lista</router-link>
    <h1>Crear </h1>
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
import { addDoc, collection } from '@firebase/firestore';
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { db } from '../../firebase/firebase';
export default {
    name: 'crear',
    setup() {
        const router = useRouter();
        const personaje = ref({ nombre: '', edad: '' })

        const agregar = async () => {
            if (personaje.value.nombre && personaje.value.edad) {
                const collectionRef = collection(db, 'vue-crud');
                await addDoc(collectionRef, personaje.value);
                router.push('/lista');
            }
        }
        return {
            personaje,
            agregar,
        }
    },
}
</script>
