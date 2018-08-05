import { pathOr } from "ramda";

const mutations = {
  addToCart(state, product) {
    state.products = state.products.map(productItem => {
      if (productItem.id !== product.id) return productItem;

      productItem.addedTime = productItem.addedTime
        ? productItem.addedTime
        : Date.now();
      productItem.amount += 1;
      return productItem;
    });
  },
  deleteItemFromCart(state, product) {
    state.products = state.products.map(productItem => {
      if (productItem.id !== product.id) return productItem;

      productItem.amount -= 1;
      return productItem;
    });
  },
  deleteProductFromCart(state, product) {
    state.products = state.products.map(productItem => {
      if (productItem.id !== product.id) return productItem;

      productItem.amount = 0;
      return productItem;
    });
  },
  deleteAll(state) {
    state.products = state.products.map(productItem => {
      if (productItem.amount === 0) return productItem;

      productItem.addedTime = productItem.amount = null;
      return productItem;
    });
  }
};

export default mutations;
