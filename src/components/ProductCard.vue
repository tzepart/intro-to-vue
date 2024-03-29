<template>
    <div class="product">
        <div class="product-image">
            <img v-bind:src="image" :alt="product"/>
        </div>

        <div class="product-info">
            <h1>{{ product }}</h1>
            <div v-show="isProductShow">
                <p v-if="availableCount>10">In Stock</p>
                <p v-else-if="availableCount<=10 && availableCount>0">Almost sold out!</p>
                <p v-else>Out of Stock</p>

                <ul>
                    <li v-for="detail in details" :key="detail.material">
                        {{ detail.material }},
                        {{ detail.add_material }},
                        {{ detail.type }}
                    </li>
                </ul>

                <div class="color-box"
                     v-for="variant in variants"
                     :key="variant.variantId"
                     :style="{ backgroundColor: variant.variantColor }"
                     @mouseover="updateProduct(variant.variantImage)"
                >
                </div>

                <button v-on:click="addToCart"
                        :disabled="availableCount===0"
                        :class="{ disabledButton: availableCount===0 }"
                >
                    Add to cart
                </button>

                <div class="cart">
                    <p>Cart({{ inCart }})</p>
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
                availableCount: 5,
                isProductShow: true,
                details: [{
                    "material": "Cotton",
                    "add_material": "Smth elso",
                    "type": "Uni-sex",
                }],
                variants: [
                    {
                        variantId: 224,
                        variantColor: 'green',
                        variantImage: require("./../assets/images/vmSocks-green-onWhite.jpg")
                    },
                    {
                        variantId: 225,
                        variantColor: 'blue',
                        variantImage: require("./../assets/images/vmSocks-blue-onWhite.jpg")
                    }
                ],
                inCart: 0
            };
        },
        methods: {
            addToCart() {
                this.availableCount -= 1;
                this.inCart += 1;
            },
            updateProduct(variantImage) {
                this.image = variantImage;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./product_card.css"></style>
