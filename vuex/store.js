// src/store.js
import { createStore } from 'vuex';
import { db } from '../firebase/firebase';
import { getDocs, collection, doc, deleteDoc, addDoc, updateDoc, getDoc } from 'firebase/firestore';

const store = createStore({
  state() {
    return {
      items: [],
      individual: [],
    };
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    addItem(state, item) {
      state.items.push(item);
    },
    setIndividual(state, individual) {
      state.individual = individual;
    },
    // updateItem(state, { index, newItem }) {
    //   state.items.splice(index, 1, newItem);
    // },
    deleteItem(state, index) {
      state.items.splice(index, 1);
    }
  },
  actions: {
    async fetchItems({ commit }) {
      let items = []
      const querySnapshot = await getDocs(collection(db, 'vue-crud'));
      items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        value: doc.data()
      }))
      commit('setItems', items);
      commit('setIndividual', []);

    },
    async addItem({ commit }, item) {
      console.log(item)
      const collectionRef = collection(db, 'vue-crud');
      const docRef = await addDoc(collectionRef, item);
      // commit('addItem', { ...item, id: docRef.id })  lo dejo para recordarme actualizar mayormente cuando la action se genera en una misma vista 
    },
    async updateItem({ commit }, { id, item }) {
      console.log(item)
      // Actualizar un elemento en Firebase Firestore
      const itemRef = doc(db, 'vue-crud', id);
      await updateDoc(itemRef, item.value);
      console.log('El elemento ha sido editado correctamente');
      // commit('updateItem', { index, newItem: item })  lo dejo para recordarme actualizar en este caso al recaagar no necesita el commit 

    },
    async deleteItem({ commit }, { index, id }) {
      const documentRef = doc(db, 'vue-crud', id);
      await deleteDoc(documentRef);
      commit('deleteItem', index);
    },
    async fetchIndividual({ commit }, id) {
      const docRef = doc(db, 'vue-crud', id);
      const individual = await getDoc(docRef);
      // console.log(individual.data())
      commit('setIndividual', individual.data());
    },
  }
});

export default store;
