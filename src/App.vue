<template>
    <div id="app">
        <div id="nav">
            <router-link :to="{ name: 'product-list' }">Product List</router-link> |
            <router-link :to="{ name: 'product-card' }">Show Product #1</router-link> |
            <router-link :to="{ name: 'product-create' }">Create Product</router-link>
            <div class="cart">
                <p>Cart({{ inCart.length }})</p>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import {EventBus} from './main'

    export default {
        name: "App",
        data() {
            return {
                inCart: []
            }
        },
        mounted() {
            EventBus.$on('add-to-cart', inCart => {
                this.inCart.push(inCart)
            })
        }
    }
</script>

<style>
    body {
        font-family: tahoma;
        color: #282828;
        margin: 0px;
    }

    .nav-bar {
        background: linear-gradient(-90deg, #84CF6A, #16C0B0);
        height: 60px;
        margin-bottom: 15px;
    }

    .cart {
        margin-right: 25px;
        float: right;
        border: 1px solid #d8d8d8;
        padding: 5px 20px;
    }

    #nav {
        padding: 30px;
    }
    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }
    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
