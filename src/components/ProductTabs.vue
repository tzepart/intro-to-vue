<template>
    <div>
        <ul>
          <span class="tabs"
                :class="{ activeTab: selectedTab === tab }"
                v-for="(tab, index) in tabs"
                v-bind:key="index"
                @click="selectedTab = tab"
          >{{ tab }}</span>
        </ul>

        <div v-show="selectedTab === 'Reviews'">
            <ProductReviews :reviews="reviews"></ProductReviews>
        </div>

        <div v-show="selectedTab === 'Make a Review'">
            <ProductAddReview @review-submitted="addReviewToList"></ProductAddReview>
        </div>
    </div>
</template>

<script>
    import ProductAddReview from "./ProductAddReview.vue"
    import ProductReviews from "./ProductReviews.vue"

    export default {
        name: "ProductTabs",
        components: {
            ProductAddReview,
            ProductReviews
        },
        data() {
            return {
                tabs: ["Reviews", "Make a Review"],
                selectedTab: "Reviews",
                reviews: []
            }
        },
        methods: {
            addReviewToList(productReview) {
                this.reviews.push(productReview)
            }
        }
    }
</script>

<style scoped>
    .tabs {
        margin-left: 20px;
        cursor: pointer;
    }

    .activeTab {
        color: #16C0B0;
        text-decoration: underline;
    }
</style>