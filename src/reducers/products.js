import productsJSON from "../products/products";

const products = (state = productsJSON.products, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default products;
