import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ProductCard from '../views/ProductCard.vue'
import ProductCreate from '../views/ProductCreate.vue'
import NotFound from '../views/NotFound.vue'
import ChartsPage from '../views/ChartsPage.vue'
import MoneyChartsPage from '../views/MoneyChartsPage.vue'

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
    {
        path: '/charts-page',
        name: 'charts-page',
        component: ChartsPage
    },
    {
        path: '/money-charts-page',
        name: 'money-charts-page',
        component: MoneyChartsPage
    },
    {
        path: '*',
        component: NotFound
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
