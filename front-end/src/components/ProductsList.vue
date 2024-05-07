<template>
    <div class="grid-wrap">
        <div class="product-item" v-for="product in products" :key="product.id">
            <img :src="product.imageUrl" alt="">
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="prodcut-price">{{ product.price }}</p>
            <router-link :to="`/product/${product.id}`">
                <button>View Details</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductsList',
    props: ['products'],
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped></style>