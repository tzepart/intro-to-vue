import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductCard from '../views/ProductCard.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: ProductCard
    }
];

const router = new VueRouter({
    routes
});

export default router
