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

  getProduct(productSKU) {
    return this.products.find((product) => product.SKU === productSKU);
  }

  getPrice(productSKU){
    const product = this.products.find((product) => product.SKU === productSKU)
    return product.price
  }
}
