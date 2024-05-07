<template>
    <div v-if="cartItems.length > 0">
        <h1>Shoping Cart</h1>
        <ShopingCartList @removeFromCart="removeFromCart($event)" :products="cartItems" />
        <button class="checkout-button">Proceed to Chekout</button>
    </div>
    <div v-if="cartItems.length === 0">
        You current have no items</div>
</template>

<script>
import ShopingCartList from '@/components/ShopingCartList.vue';
import axios from 'axios';

export default {
    name: 'ShoppingCartPage',
    components: {
        ShopingCartList  
    },
    props: ['user'],
    data() {
        return {
            cartItems:[]
        }
    },
    watch: {
        async user(newUserValue) {
            if (newUserValue) {
                const cartResponse = await axios.get(`/api/users/${newUserValue.uid}/cart`);
                const cartItems = cartResponse.data;
                this.cartItems = cartItems;
            }
        }
    },
    methods: {
       async removeFromCart(productId) {
            const response = await axios.delete(`./api/users/${this.user.uid}/cart/${productId}`);
            const updatedCart = response.data;
            this.cartItems = updatedCart;
        }  
    },
    async created() {
        if (this.user) {
            const response = await axios.get(`/api/users/${this.user.uid}/cart`);
            const cartItems = response.data
            this.cartItems = cartItems
        }
    }
}
</script>
