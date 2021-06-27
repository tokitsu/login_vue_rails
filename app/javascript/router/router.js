import Vue          from 'vue'
import VueRouter    from 'vue-router'
import BookHome     from '../pages/BookHome.vue'
import BookCreate   from '../pages/BookCreate.vue'
import BookUpdate    from '../pages/BookUpdate.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/',             name: 'BookHome',   component: BookHome },
  { path: '/create',       name: 'BookCreate', component: BookCreate},
  { path: '/update/:id',   name: 'BookUpdate',   component: BookUpdate},
];

export default new VueRouter({ routes });
