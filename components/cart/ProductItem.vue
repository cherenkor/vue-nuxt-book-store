<template>
    <div class="product-item">
        <div class="product-image"><img :src="product.image" alt=""></div>
        <div class="product-info">
            <h3 class="product-title">{{ product.title }}</h3>
            <h5 class="author-name">{{ product.author }}</h5>
        </div>
        <div class="amount">
            <span @click="deleteItem" class="amount-changer">-</span>
            <span class="amount-number"><strong>{{ product.amount }}</strong></span>
            <span @click="addItem" class="amount-changer">+</span>
        </div>
        <div class="price">
            <span>Price: </span><span class="price-number"><strong>{{ getCurrencySymbol }}{{ product.price }}</strong></span>
        </div>
        <div class="delete-product">
            <span @click='deleteProduct' class="delete">X</span>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: {}
    }
  },
  computed: {
    getCurrencySymbol() {
      return this.$store.state.storeSettings.currencySymbol;
    }
  },
  methods: {
    deleteProduct() {
      this.$store.commit("deleteProductFromCart", this.product);
      this.$notify({
        title: "Delete",
        message: `${this.product.title} - ${this.product.author}`,
        type: "warning",
        onClick: () => {
          this.$router.push("/cart");
        },
        duration: 900
      });
    },
    deleteItem() {
      this.$store.commit("deleteItemFromCart", this.product);
    },
    addItem() {
      this.$store.commit("addToCart", this.product);
    }
  }
};
</script>

<style scoped>
.product-item {
  display: flex;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(180, 180, 180, 0.774);
  width: 100%;
}
.product-info {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.product-image {
  width: 10%;
  height: 60px;
  padding: 0 32px;
}
.product-image img {
  height: 100%;
}
.amount {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.amount-changer {
  border-radius: 6px;
  background-color: #b9aeae;
  padding: 10px 16px;
  margin: 0 20px;
  line-height: 1;
  cursor: pointer;
  transition: transform 0.3s;
}
.amount-changer:hover {
  transform: scale(1.2);
}
.price {
  min-width: 10%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-self: center;
  margin-right: 20px;
  font-size: 18px;
}
.delete-product {
  position: relative;
  right: 0px;
  top: -4px;
}
.delete {
  width: 40px;
  color: blue;
  text-transform: uppercase;
  font-size: 12px;
  background-color: #ff0000;
  padding: 4px 6px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}
.delete:hover {
  text-decoration: underline;
}
.price {
  font-size: 20px;
}
</style>