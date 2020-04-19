<template>
    <div class="product">
        <div class="product-image">
            <img :src="image" :alt="product"/>
        </div>

        <div class="product-info">
            <h1>{{ product }}</h1>
            <p v-if="inventory>10">In Stock</p>
            <p v-else-if="inventory<=10 && inventory>0">Almost sold out!</p>
            <p v-else>Out of Stock</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductCard',
        data: function () {
            return {
                product: 'Socks',
                image: require('./../assets/images/vmSocks-green-onWhite.jpg'),
                inventory: 5
            };
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .product {
        display: flex;
        flex-flow: wrap;
        padding: 1rem;
    }

    img {
        border: 1px solid #d8d8d8;
        width: 70%;
        margin: 40px;
        box-shadow: 0px .5px 1px #d8d8d8;
    }

    .product-image {
        width: 80%;
    }

    .product-image,
    .product-info {
        margin-top: 10px;
        width: 50%;
    }

    .color-box {
        width: 40px;
        height: 40px;
        margin-top: 5px;
    }

    .cart {
        margin-right: 25px;
        float: right;
        border: 1px solid #d8d8d8;
        padding: 5px 20px;
    }

    button {
        margin-top: 30px;
        border: none;
        background-color: #1E95EA;
        color: white;
        height: 40px;
        width: 100px;
        font-size: 14px;
    }

    .disabledButton {
        background-color: #d8d8d8;
    }

    .review-form {
        width: 400px;
        padding: 20px;
        margin: 40px;
        border: 1px solid #d8d8d8;
    }

    input {
        width: 100%;
        height: 25px;
        margin-bottom: 20px;
    }

    textarea {
        width: 100%;
        height: 60px;
    }

    .tab {
        margin-left: 20px;
        cursor: pointer;
    }

    .activeTab {
        color: #16C0B0;
        text-decoration: underline;
    }
</style>
