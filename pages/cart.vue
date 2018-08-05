<template>
    <div>
        <app-header :hideCart="true" />
        <el-main>
            <products-list />
        </el-main>
    </div>
</template>

<script>
import AppHeader from "@/components/Header";
import ProductsList from "@/components/cart/ProductsList";
export default {
  components: {
    AppHeader,
    ProductsList
  }
};
</script>

<style scoped>
</style>