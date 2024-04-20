<template>
    <div id="app">
        <div class="cart">
            <p>Cart({{ inCart.length }})</p>
        </div>
        <ProductCard
                :premium="premium"
                @add-to-cart="updateCart"
                msg="Welcome to Example App"
        />
    </div>
</template>

<script>
    import ProductCard from './components/ProductCard.vue'

    export default {
        name: 'App',
        data: function () {
            return {
                premium: false,
                inCart: []
            }
        },
        components: {
            ProductCard
        },
        methods: {
            updateCart(id) {
                this.inCart.push(id);
            }
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
</style>
