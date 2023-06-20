// src/store.js
import { createStore } from 'vuex';
import { db } from '../firebase/firebase';
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';

const store = createStore({
  state() {
    return {
      items: []
    };
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    addItem(state, item) {
      state.items.push(item);
    },
    updateItem(state, { index, newItem }) {
      state.items.splice(index, 1, newItem);
    },
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
    },
    // async addItem({ commit }, item) {
    //   // Agregar un elemento a Firebase Firestore
    //   const docRef = await db.collection('items').add(item);
    //   commit('addItem', { ...item, id: docRef.id });
    // },
    // async updateItem({ commit }, { index, item }) {
    //   // Actualizar un elemento en Firebase Firestore
    //   const docRef = await db.collection('items').doc(item.id);
    //   await docRef.update(item);
    //   commit('updateItem', { index, newItem: item });
    // },
    async deleteItem({ commit }, { index, id }) {
      // Eliminar un elemento de Firebase Firestore
      const documentRef = doc(db, 'vue-crud', id);
      await deleteDoc(documentRef);
      commit('deleteItem', index);
    }
  }
});

export default store;
