<template>
    <div class="product">
        <div class="product-image">
            <img v-bind:src="image" :alt="product"/>
        </div>

        <div class="product-info">
            <h2>{{ msg }}</h2>
            <h1>{{ title }}</h1>
            <div v-show="isProductShow">
                <p v-if="availableCount>10">In Stock</p>
                <p v-else-if="availableCount<=10 && availableCount>0">Almost sold out!</p>
                <p v-else>Out of Stock</p>
                <p>{{ sale }}</p>
                <p>Shipping: {{ shipping }}</p>

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
            </div>
        </div>
        <div>
            <p v-if="!reviews.length">There are no reviews yet.</p>
            <ul v-else>
                <li v-for="(review, index) in reviews" :key="index">
                    <p>{{ review.name }}</p>
                    <p>Rating:{{ review.rating }}</p>
                    <p>{{ review.review }}</p>
                </li>
            </ul>
        </div>
        <ProductReview @review-submitted="addReview"></ProductReview>
    </div>
</template>

<script>
    import ProductReview from './ProductReview.vue'

    export default {
        name: "ProductCard",
        props: {
            premium: {
                type: Boolean,
                required: true
            },
            msg: {
                type: String,
                required: false
            }
        },
        components: {
            ProductReview
        },
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
                inCart: 0,
                reviews: []
            };
        },
        methods: {
            addToCart() {
                this.items[this.selectedVariant].itemQuantity -= 1;
                this.$emit('add-to-cart', this.items[this.selectedVariant].itemId);
            },
            updateProduct: function (index) {
                this.selectedVariant = index
            },
            addReview(productReview) {
                this.reviews.push(productReview)
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
<style src="./product_card.css"></style>
