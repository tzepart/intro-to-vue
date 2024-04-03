<template>
    <div class="product">
        <div class="product-image">
            <img v-bind:src="image" :alt="product"/>
        </div>

        <div class="product-info">
            <h1>{{ title }}</h1>
            <div v-show="isProductShow">
                <p v-if="availableCount>10">In Stock</p>
                <p v-else-if="availableCount<=10 && availableCount>0">Almost sold out!</p>
                <p v-else>Out of Stock</p>
                <p>{{ sale }}</p>

                <ul>
                    <li v-for="detail in details" :key="detail.material">
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
                brand: 'Sunny bunny',
                isProductShow: true,
                selectedVariant: 0,
                details: [{
                    "material": "Cotton",
                    "add_material": "Smth elso",
                    "type": "Uni-sex",
                }],
                items: [
                    {
                        itemId: 224,
                        itemColor: 'green',
                        itemImage: require("./../assets/images/vmSocks-green-onWhite.jpg"),
                        itemQuantity: 11
                    },
                    {
                        itemId: 225,
                        itemColor: 'blue',
                        itemImage: require("./../assets/images/vmSocks-blue-onWhite.jpg"),
                        itemQuantity: 2
                    }
                ],
                inCart: 0
            };
        },
        methods: {
            addToCart() {
                this.items[this.selectedVariant].itemQuantity -= 1;
                this.inCart += 1;
            },
            updateProduct: function (index) {
                this.selectedVariant = index
            }
        },
        computed: {
            title() {
                return this.brand + ' ' + this.product
            },
            image() {
                return this.items[this.selectedVariant].itemImage
            },
            availableCount() {
                return this.items[this.selectedVariant].itemQuantity
            },
            sale() {
                if (this.availableCount > 0) {
                    return this.brand + ' ' + this.product + ' are on sale!'
                }
                return this.brand + ' ' + this.product + ' are not on sale'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./product_card.css"></style>
