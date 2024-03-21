<template>
    <div class="product">
        <div class="product-image">
            <img v-bind:src="image" :alt="product"/>
        </div>

        <div class="product-info">
            <h1>{{ product }}</h1>
            <div v-show="isProductShow">
                <p v-if="inventory>10">In Stock</p>
                <p v-else-if="inventory<=10 && inventory>0">Almost sold out!</p>
                <p v-else>Out of Stock</p>

                <ul>
                    <li v-for="detail in details" :key="detail.material">
                        {{ detail.material }},
                        {{ detail.add_material }},
                        {{ detail.type }}
                    </li>
                </ul>

                <div v-for="variant in variants" :key="variant.variantId">
                    <p @mouseover="updateProduct(variant.variantImage)">{{ variant.variantColor }}</p>
                </div>

                <button @click="addToCart">Add to cart</button>

                <div class="cart">
                    <p>Cart({{ cart }})</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductCard",
        data: function () {
            return {
                product: "Socks",
                image: require("./../assets/images/vmSocks-green-onWhite.jpg"),
                inventory: 5,
                isProductShow: true,
                details: [{
                    "material": "Cotton",
                    "add_material": "Smth elso",
                    "type": "Uni-sex",
                }],
                variants: [
                    {
                        variantId: 2234,
                        variantColor: 'green',
                        variantImage: require("./../assets/images/vmSocks-green-onWhite.jpg")
                    },
                    {
                        variantId: 2235,
                        variantColor: 'blue',
                        variantImage: require("./../assets/images/vmSocks-blue-onWhite.jpg")
                    }
                ],
                cart: 0
            };
        },
        methods: {
            addToCart() {
                this.cart += 1
            },
            updateProduct(variantImage) {
                this.image = variantImage
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./product_card.css"></style>
