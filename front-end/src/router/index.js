import { createRouter, createWebHistory } from "vue-router";
import ProductDetailPageVue from '../pages/ProductDetailPage.vue'
import ProductsPageVue from '../pages/ProductsPage.vue'
import ShoppingCartPageVue from '../pages/ShoppingCartPage.vue'
import NotFoundPageVue from '../pages/NotFoundPage.vue'

const routes = [
    {
        path: '/cart',
        component: ShoppingCartPageVue,
    },
    {
        path: '/',
        redirect: '/products',
    },
    {
        path: '/products',
        component: ProductsPageVue,
    },
    {
        path: '/product/:productId',
        component: ProductDetailPageVue,
    },
    {
        path: '/:pathMatch(.*)',
        component: NotFoundPageVue,
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFoundPageVue,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: "smooth",
        };
      }
      return savedPosition || { top: 0 };

    },
  });
  
  export default router;