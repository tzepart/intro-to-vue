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
        path: '/product-card/:code',
        name: 'product-card',
        component: ProductCard,
        props: true
    },
    {
        path: '/product-create',
        name: 'product-create',
        component: ProductCreate
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
