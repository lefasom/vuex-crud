import { createRouter, createWebHistory } from 'vue-router'
import Principal from '../views/Principal.vue'
import ListaDeElementos from '../views/ListaDeElementos.vue'
import Crear from '../views/Crear.vue'
import Editar from '../views/Editar.vue'

const routes = [
  {
    path: '/',
    name: 'Principal',
    component: Principal
  },
  {
    path: '/lista',
    name: 'ListaDeElementos',
    component: ListaDeElementos
  },
  {
    path: '/crear',
    name: 'Crear',
    component: Crear
  },
  {
    path: '/editar/:itemId',
    name: 'Editar',
    component: Editar
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
