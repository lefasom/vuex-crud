<template>
    <router-link to="/lista">Ir a la Lista</router-link>
    <h1>Editar </h1>
    <input v-on:keyup.enter='editar' v-model="item.nombre">
    <input v-on:keyup.enter='editar' v-model="item.edad">
    <p>{{ item }}</p>
    <button v-on:click="editar">Editar</button>
</template>    
<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { db } from '../../firebase/firebase';
import { getDoc, updateDoc, doc } from 'firebase/firestore';
export default {
    name: 'editar',
    setup() {
        const route = useRouter();
        const id = route.currentRoute._value.params.itemId;
        const item = ref({ nombre: '', edad: '' });
        const editar = async () => {
            if (item.value) {
                try {
                    const itemRef = doc(db, 'vue-crud', id);
                    await updateDoc(itemRef, item.value);
                    console.log('El elemento ha sido editado correctamente');
                    route.push('/lista');
                } catch (error) {
                    console.error('Error al editar el elemento:', error);
                }
            }
        }

        onMounted(async () => {
            try {
                const docRef = doc(db, 'vue-crud', id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    item.value.edad = docSnap.data().edad;
                    item.value.nombre = docSnap.data().nombre;
                } else {
                    console.log('El documento no existe');
                }
            } catch (error) {
                console.log('Error al obtener el documento:', error);
            }
        });

        return {
            editar,
            item
        }
    },
}
</script>
