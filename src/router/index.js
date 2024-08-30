// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import BookListing from '../components/HomePage.vue';
import SignIn from '../components/SignIn.vue';
import SignUp from '../components/SignUp.vue';
import SellABook from '../components/SellABook.vue';
import SellerDetails from "@/components/SellerDetails.vue";
import HomePage from "@/components/HomePage.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/signin', component: SignIn },
    { path: '/signup', component: SignUp },
    { path: '/sellabook', component: SellABook },
    { path: '/sellerdetails', component: SellerDetails},

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
