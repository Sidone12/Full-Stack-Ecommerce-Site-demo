<template>
<div class="nav-bar">
    <router-link class="product-link" to="/products">
        <div class="logo-wrap">
            <img :src="logo" alt="">
        </div>
    </router-link>
    <div class="nav-buttons-wrap">
        <button v-if="user" @click="signOut">Sign Out</button>
        <router-link to="/cart"> <button>Shoping Cart</button></router-link>
    </div>

</div>
</template>

<script>
import logo from '@/assets/logo-hexagon.svg';

import { getAuth, signOut } from 'firebase/auth';
export default {
    name: 'NavBar',
    props: ['user'],
    data() {
        return {
            logo
        }
    },
    methods: {
        signOut() {
            const auth = getAuth()
            signOut(auth)
        }
    }
}
</script>
