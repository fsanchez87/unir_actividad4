class Product {
  constructor(SKU, title, price) {
    this.SKU = SKU;
    this.title = title;
    this.price = price;
  }

  getSKU() {
    return this.SKU;
  }

  getTitle() {
    return this.title;
  }

  getPrice() {
    return this.price;
  }
}
