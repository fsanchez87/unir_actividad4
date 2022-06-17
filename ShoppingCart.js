class ShoppingCart {
  constructor(product = []) {
    this.product = product;
  }

  getProduct() {
    return this.product;
  }

  setProduct(product) {
    this.product.push(product);
  }

  getProductQuantity(SKU) {}

  setProductQuantity(SKU) {}
}
