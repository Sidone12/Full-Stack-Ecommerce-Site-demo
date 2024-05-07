<template>
    <div>
        <div class="product-container" v-for="product in products" :key="product.id">
            <img class="product-image" :src="product.imageUrl" alt="">
            <div class="details-wrap">
                <h3>{{ product.name }}</h3>
                <p>{{ product.price }}</p>
            </div>
            <button @click="$emit('removeFromCart', product.id)" class="remove-button">Remove from Cart</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShopingCartList',
    props: ['products']
}
</script>

<style lang="scss" scoped></style>