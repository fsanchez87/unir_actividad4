class Shop {
  constructor(products = []) {
    this.products = products;
  }

  setProducts(product) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProduct(SKU) {
    return this.products.find((product) => product.SKU === SKU);
  }
}
