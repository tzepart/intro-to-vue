<template>
    <div class="product">
        <div class="product-image">
            <img v-bind:src="productImage" :alt="product"/>
        </div>

        <div class="product-info">
            <h2>{{ msg }}</h2>
            <h1>{{ title }}</h1>
            <h2>Code: {{ code }}</h2>
            <div v-show="isProductShow">
                <p v-if="availableCount>10">In Stock</p>
                <p v-else-if="availableCount<=10 && availableCount>0">Almost sold out!</p>
                <p v-else>Out of Stock</p>
                <p>{{ sale }}</p>
                <p>Shipping: {{ shipping }}</p>

                <ul>
                    <li v-for="(detail, index) in details" :key="index">
                        {{ detail.material }},
                        {{ detail.add_material }},
                        {{ detail.type }}
                    </li>
                </ul>

                <div class="color-box"
                     v-for="(item, index) in items"
                     :key="item.itemId"
                     :style="{ backgroundColor: item.itemColor }"
                     @mouseover="updateProduct(index)"
                >
                </div>

                <button v-on:click="addToCart"
                        :disabled="availableCount===0"
                        :class="{ disabledButton: availableCount===0 }"
                >
                    Add to cart
                </button>
            </div>
        </div>
        <ProductTabs></ProductTabs>
    </div>
</template>

<script>
    import ProductTabs from "../components/ProductTabs.vue"
    import {EventBus} from './../main'

    export default {
        name: "ProductCard",
        props: {
            msg: {
                type: String,
                required: false
            },
            code: {
                type: String,
                required: true
            }
        },
        components: {
            ProductTabs
        },
        data: function () {
            return {
                product: "Socks",
                brand: "Sunny bunny",
                isProductShow: true,
                selectedVariant: 0,
                premium: false,
                details: [{
                    "material": "Cotton",
                    "add_material": "Smth else",
                    "type": "Uni-sex",
                }],
                items: [
                    {
                        itemId: 224,
                        itemColor: "green",
                        itemImage: require("../assets/images/vmSocks-green-onWhite.jpg"),
                        itemQuantity: 11
                    },
                    {
                        itemId: 225,
                        itemColor: "blue",
                        itemImage: require("../assets/images/vmSocks-blue-onWhite.jpg"),
                        itemQuantity: 2
                    }
                ],
                inCart: 0
            };
        },
        methods: {
            addToCart() {
                this.items[this.selectedVariant].itemQuantity -= 1;
                EventBus.$emit("add-to-cart", this.items[this.selectedVariant].itemId);
            },
            updateProduct: function (index) {
                this.selectedVariant = index
            }
        },
        computed: {
            title() {
                return this.brand + " " + this.product
            },
            productImage() {
                return this.items[this.selectedVariant].itemImage
            },
            availableCount() {
                return this.items[this.selectedVariant].itemQuantity
            },
            sale() {
                if (this.availableCount > 0) {
                    return this.brand + " " + this.product + " are on sale!"
                }
                return this.brand + " " + this.product + " are not on sale"
            },
            shipping() {
                if (this.premium) {
                    return "Free"
                }
                return 2.99
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/styles/product-card.css"></style>
