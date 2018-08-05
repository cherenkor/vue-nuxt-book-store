<template>
    <div>
        <el-card :body-style="{width: '100%'}" class="product-card">
          <div v-if="!isEmptyCart" class="cart-content">
            <div class="cart-header">
              <h3 class="cart-title">Cart</h3>
              <span @click="deleteAll" class="delete-all button">Delete All</span>
            </div>
            <div v-for="(product, index) in cartProducts" :key="`${product.id}-${product.title}-${index}`">
              <product-item :product="product" />
            </div>
            <div class="total">
              <span>Total: <strong>{{ getCurrencySymbol }}{{ total }}</strong></span>
            </div>
          </div>
          <div v-else class="empty-cart">
            <h3>Your cart is Empty :(</h3>
            <nuxt-link class="button" to="/">Go to Shop</nuxt-link>
          </div>
        </el-card>
    </div>
</template>

<script>
import ProductItem from "@/components/cart/ProductItem";

export default {
  components: {
    ProductItem
  },
  computed: {
    getCurrencySymbol() {
      return this.$store.state.storeSettings.currencySymbol;
    },
    cartProducts() {
      return this.$store.getters.getProductsInCart;
    },
    isEmptyCart() {
      return this.cartProducts.length === 0;
    },
    total() {
      return this.$store.getters.getCartTotal;
    }
  },
  methods: {
    deleteAll() {
      this.$store.commit("deleteAll");
    }
  }
};
</script>

<style scoped>
.el-card {
  width: 100%;
}
.product-card {
  display: flex;
}
.cart-header {
  display: flex;
  position: relative;
  top: -10px;
  justify-content: space-between;
  padding: 10px 0 20px;
}
.cart-title {
  line-height: 1;
  font-size: 32px;
  color: #2a7cbe;
  padding: 0 30px;
  text-decoration: underline;
}
.total {
  text-align: right;
  font-size: 28px;
  padding: 6px;
  color: #2a7cbe;
}
.empty-cart {
  text-align: center;
  color: #949191;
  height: 80px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-around;
}
.button {
  color: #fff;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: #f8ad0a;
  cursor: pointer;
  max-height: max-content;
}
</style>