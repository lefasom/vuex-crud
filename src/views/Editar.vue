<template>
    <router-link to="/lista">Ir a la Lista</router-link>
    <h1>Editar </h1>
    <input v-on:keyup.enter='editar' v-model="item.nombre">
    <input v-on:keyup.enter='editar' v-model="item.edad">
    <p>{{ item }}</p>
    <button v-on:click="editar">Editar</button>
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
