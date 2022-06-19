class ShoppingCart {
  constructor(products = []) {
    this.products = products;
  }

  getProducts() {
    return this.products;
  }

  setProduct(productSKU) {
    this.products.push(productSKU);
  }

  removeProduct(productSKU) {
    const index = this.products.indexOf(productSKU);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  getProductQuantity(product) {
    const quantity = this.products.reduce((total, productSKU) => {
      return productSKU === product ? (total += 1) : total;
    }, 0);
    return quantity;
  }

  getTotalPrice(productSKU) {
    const product = shop.getProduct(productSKU);
    const price = Number(product.price);
    const quantity = Number(this.getProductQuantity(productSKU));
    return Number.parseFloat(price * quantity).toFixed(2);
  }

  getTotalShoppingCartPrice() {
    const totales = this.products.reduce((total, product) => {
      return Number(total) + Number(shop.getPrice(product));
    }, 0);
    return Number.parseFloat(totales).toFixed(2);
  }

}
