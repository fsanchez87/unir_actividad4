class Shop {
  #currency;

  constructor(products = []) {
    this.products = products;
  }

  setCurrency(currency) {
    this.#currency = currency;
  }

  getCurrency() {
    return this.#currency;
  }

  setProducts(product) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProduct(productSKU) {
    return this.products.find((product) => product.SKU === productSKU);
  }

  getPrice(productSKU) {
    const product = this.products.find((product) => product.SKU === productSKU);
    return product.price;
  }
}
