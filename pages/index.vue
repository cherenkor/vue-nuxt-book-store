<template>
  <div class="app">
    <el-container>
      <app-header></app-header>
      <el-main>
        <product-list/>
      </el-main>
      <el-footer>
        <h3>made by Sergey Kucherenko | 2018 | <a href="mailto:kucherenko.web@gmail.com">kucherenko.web@gmail.com</a></h3>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import AppHeader from "@/components/Header";
import ProductList from "@/components/ProductList";
export default {
  components: {
    AppHeader,
    ProductList
  }
};
</script>

<style>
</style>
