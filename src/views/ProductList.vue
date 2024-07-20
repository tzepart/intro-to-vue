<template>
    <div class="container">
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 class="display-4">Product List</h1>
            <p class="lead">
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores at aut blanditiis
                    deleniti esse eum, facere maxime, molestias pariatur quasi quis ratione, recusandae repellendus
                    repudiandae soluta temporibus ut voluptate!
                </span>
            </p>
        </div>
        <div class="card-deck mb-3 text-center">
            <div class="card mb-4 box-shadow">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">Wonderful Socks</h4>
                </div>
                <div class="card-body">
                    <h2 class="card-title pricing-card-title">$25</h2>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>Breathable mesh</li>
                        <li>Premium ring spun cotton</li>
                        <li>Cushioned sole</li>
                        <li>Spandex for a superior fit</li>
                        <li>82% Cotton, 17% Polyester, 1% Spandex</li>
                    </ul>
                    <router-link class="btn btn-lg btn-block btn-outline-primary"
                                 :to="{ name: 'product-card', params: { code: 'wonderful-socks' } }">
                        Show Product
                    </router-link>
                </div>
            </div>
            <div class="card mb-4 box-shadow">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">Wonderful Socks</h4>
                </div>
                <div class="card-body">
                    <h2 class="card-title pricing-card-title">$25</h2>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>Breathable mesh</li>
                        <li>Premium ring spun cotton</li>
                        <li>Cushioned sole</li>
                        <li>Spandex for a superior fit</li>
                        <li>82% Cotton, 17% Polyester, 1% Spandex</li>
                    </ul>
                    <router-link class="btn btn-lg btn-block btn-outline-primary"
                                 :to="{ name: 'product-card', params: { code: 'wonderful-socks' } }">
                        Show Product
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductList"
    }
</script>

<style scoped>

</style>