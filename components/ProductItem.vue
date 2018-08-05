<template>
    <div class="product-card">
    <el-card shadow="hover" :body-style="bodyStyle">
        <div class="product-preview">
          <img :src="product.image" class="image">
        </div>
        <div class="product-info">
          <div class="description">
            <h3 class="product-title">{{ product.title }}</h3>
            <h5 class="author-name">{{ product.author }}</h5>
            <br>
            <span class="quote"><i>“He was a man without a past, whose future was the 
                              imminent grave and whose present was a bitter fever of living.”</i></span>
          </div>
          <div class="bottom">
            <span class="price">{{ getCurrencySymbol }}{{ product.price }}</span>
            <el-button @click="addToCart" type="success btn-buy">Buy</el-button>
          </div>
        </div>
    </el-card>
    </div>
</template>

<script>
export default {
  data() {
    return {
      bodyStyle: {
        display: "flex",
        justifyContent: "space-between",
        height: "260px",
        width: "100%"
      }
    };
  },
  props: {
    product: {
      type: Object,
      default: null
    },
    id: {
      type: Number,
      default: 0
    }
  },
  computed: {
    getCurrencySymbol() {
      return this.$store.state.storeSettings.currencySymbol;
    }
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
      this.$notify({
        title: "Add",
        message: `${this.product.title} - ${this.product.author}`,
        type: "success",
        onClick: () => {
          this.$router.push("/cart");
        },
        offset: 60,
        duration: 1000
      });
    }
  }
};
</script>

<style scoped>
.product-card {
  width: 420px;
  margin: 8px;
}
.product-preview {
  width: 40%;
}
.image {
  width: 100%;
  height: 100%;
}
.description {
  height: 82%;
}
.quote {
  font-size: 12px;
}
.product-info {
  width: 55%;
  justify-content: flex-end;
}
.bottom {
  justify-content: flex-end;
  align-items: center;
  display: flex;
  height: auto;
}
.price {
  margin-right: 12px;
  font-size: 22px;
  font-weight: 600;
}
</style>