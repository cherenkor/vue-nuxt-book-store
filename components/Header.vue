<template>
    <div class="header">
        <el-header height="80px">
            <div class="logo"><nuxt-link tag="h1" to="/">Book Store</nuxt-link></div>
            <div v-if="!hideCart" @click="goToCart" class="cart">
                <i class="fa fa-shopping-cart" aria-hidden="true">
                    <span class="amount" :class="classEmpty" :style="hideAmounts">+{{ productsInCart }}</span>
                </i>
            </div>
        </el-header>
    </div>
</template>

<script>
export default {
  props: {
    hideCart: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isEmpty: false
    };
  },
  computed: {
    hideAmounts() {
      return this.isEmpty ? { opacity: 0 } : { opacity: 1 };
    },
    productsInCart() {
      return this.$store.getters.getProductsInCartAmount;
    },
    classEmpty() {
      return { isEmpty: this.productsInCart === 0 };
    }
  },
  methods: {
    goToCart() {
      this.$router.push("/cart");
    }
  }
};
</script>

<style scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
}
.logo h1 {
  color: #177cbe;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: relative;
  transition: 0.5s color ease;
  text-decoration: none;
}
.logo h1:hover {
  color: #d73444;
}
.cart {
  line-height: 1;
  cursor: pointer;
}
.fa-shopping-cart {
  font-size: 32px;
  transition: size 0.5s ease;
}
.cart::before {
  font-size: 2.5em;
  border-bottom: 3px solid #227cda;
  content: "";
  transition: width 0.5s ease;
  position: absolute;
  width: 0;
  top: 60px;
}
.cart:hover::before {
  width: 40px;
}
.amount {
  font-size: 0.7em;
  position: relative;
  top: -18px;
  right: 10px;
  color: #f2f6fc;
  border-radius: 50%;
  background: #67c23a;
  padding: 3px;
  transition: all 0.5s;
}
.amount.isEmpty {
  background: #3a8ee6;
  font-size: 0.5em;
}
</style>