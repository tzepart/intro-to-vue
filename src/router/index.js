import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ProductCard from '../views/ProductCard.vue'
import ProductCreate from '../views/ProductCreate.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/product-list',
        name: 'product-list',
        component: ProductList,
        alias: '/'
    },
    {
        path: '/product-card',
        name: 'product-card',
        component: ProductCard
    },
    {
        path: '/product-create',
        name: 'product-create',
        component: ProductCreate
    },
];

const router = new VueRouter({
    routes
});

export default router
