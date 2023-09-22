import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Home from '../components/pages/Home.vue'
import Category from '../components/pages/category/index.vue'
import CategoryCreate from '../components/pages/category/create.vue'
import CategoryEdit from '../components/pages/category/edit.vue'
// product
import Product from '../components/pages/product/index.vue'
import ProductCreate from '../components/pages/product/create.vue'
import ProductEdit from '../components/pages/product/edit.vue'
const routes = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'

        },
        {
            path: '/category',
            component: Category,
            name: 'category'

        },
        {
            path: '/category/create',
            component: CategoryCreate,
            name: 'create-category'

        },
        {
            path: '/category/edit/:id',
            component: CategoryEdit,
            name: 'edit-category'

        },
        // product route
        {
            path: '/product',
            component: Product,
            name: 'product'

        },
        {
            path: '/product/create',
            component: ProductCreate,
            name: 'create-product'

        },
        {
            path: '/product/edit/:id',
            component: ProductEdit,
            name: 'edit-product'

        }
    ]
})
export default routes;