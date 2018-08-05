const getters = {
  getAllProducts(state) {
    return state.products;
  },
  getProductsInCartAmount(state) {
    let productsAmount = 0;

    state.products.forEach(product => (productsAmount += product.amount));

    return productsAmount;
  },
  getProductsInCart(state) {
    const productsInCart = state.products.filter(product => product.amount > 0);
    productsInCart.sort((a, b) => b.addedTime - a.addedTime);
    return productsInCart;
  },
  getCartTotal(state) {
    return state.products.reduce((acc, product) => {
      acc += product.amount * product.price;
      return acc;
    }, 0);
  }
};

export default getters;
