<template>
    <div>
        <h1>Product List</h1>
        <router-link :to="{ name: 'product-card', params: { code: 'wonderful-socks' } }">Show Product Wonderful Socks</router-link>
    </div>
</template>

<script>
    export default {
        name: "ProductList"
    }
</script>

<style scoped>

</style>