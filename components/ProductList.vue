<template>
    <div>
        <el-row>
            <el-col class="product-list">
              <div class="product-list" 
                v-for="(product, index) in getAllProducts" 
                :key="`${product.id}-${product.title}-${index}`">
                <product-item :product="product" :id="product.id"/>                
              </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import ProductItem from "@/components/ProductItem";
export default {
  components: {
    ProductItem
  },
  computed: {
    getAllProducts() {
      return this.$store.getters.getAllProducts;
    }
  }
};
</script>

<style scoped>
.product-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>