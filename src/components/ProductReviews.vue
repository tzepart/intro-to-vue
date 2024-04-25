<template>
    <div>
        <p v-if="!reviews.length">There are no reviews yet.</p>
        <ul>
            <li v-for="(review, index) in reviews" v-bind:key="index">
                <p>Author: {{ review.name }}</p>
                <p>Rating: {{ review.rating }}</p>
                <p>Comment: {{ review.review }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ProductReviews",
        props: {
            reviews: {
                type: Array,
                required: true
            },
        }
    }
</script>