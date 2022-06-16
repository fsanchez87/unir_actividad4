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
}
