<template>
    <h1>Products</h1>
    <ProductsList :products="products" />
</template>

<script>
import ProductsList from '@/components/ProductsList.vue';
import axios from 'axios';

export default {
    name: 'ProductPage',
    components: {
        ProductsList,
    },
    data() {
        return {
            products: [],
        }
    },
    async created() {
        // add path to proxy for CORS 
        const response = await axios.get('/api/products');
        const products = response.data;
        console.log(products)
        this.products = products;
    }
}
</script>
