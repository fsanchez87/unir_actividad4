const shop = new Shop();
const shoppingCart = new ShoppingCart();

document.addEventListener("DOMContentLoaded", () => {
  
  const removeProductClickHandler = (event) => {
    const SKU = event.target.getAttribute("info-SKU");
    shoppingCart.removeProduct(SKU);
    renderedProducts();
    renderedProductsShooppingCart();
  };

  const addProductClickHandler = (event) => {
    const SKU = event.target.getAttribute("info-SKU");
    shoppingCart.setProduct(SKU);
    renderedProducts();
    renderedProductsShooppingCart();
  };

  const renderedProductsShooppingCart = () => {
    const tableBodyEl = document.querySelector("#table-body-total");
    tableBodyEl.innerHTML = "";

    const carritoSinDuplicar = [...new Set(shoppingCart.getProducts())];

    carritoSinDuplicar.forEach((productSKU) => {
      // Create column for products
      const trEl = document.createElement("tr");
      const tdProductEl = document.createElement("td");
      tdProductEl.setAttribute("class", "border-0")
      const product = shop.getProduct(productSKU);
      tdProductEl.innerText = product.title;

      // Create column for price
      const tdPriceEl = document.createElement("td");
      tdPriceEl.setAttribute("class", "border-0 text-end")
      tdPriceEl.innerText = shoppingCart.getTotalPrice(product.SKU);
      const spanPriceEl = document.createElement("span");
      spanPriceEl.innerText = data.currency;
      tdPriceEl.appendChild(spanPriceEl);

      trEl.appendChild(tdProductEl);
      trEl.appendChild(tdPriceEl);
      tableBodyEl.appendChild(trEl);
    });

    // Create row for total price
    const trTotalsEl = document.createElement("tr");
    trTotalsEl.setAttribute("class", "border-top")
    const tdTotalEl = document.createElement("td");
    tdTotalEl.setAttribute("class", "fw-normal text-uppercase border-0");
    tdTotalEl.innerText = "Total";

    const tdTotalShoppingCartPrice = document.createElement("td");
    tdTotalShoppingCartPrice.setAttribute("class", "border-0 fw-bold text-end");
    tdTotalShoppingCartPrice.innerText =
      shoppingCart.getTotalShoppingCartPrice();
    const spanTotalEL = document.createElement("span");
    spanTotalEL.innerText = data.currency;
    tdTotalShoppingCartPrice.appendChild(spanTotalEL);

    trTotalsEl.appendChild(tdTotalEl);
    trTotalsEl.appendChild(tdTotalShoppingCartPrice)
    tableBodyEl.appendChild(trTotalsEl);
  };

  // Add products in html
  const renderedProducts = () => {
    const tableBodyEl = document.querySelector("#table-body");
    tableBodyEl.innerHTML = "";

    shop.getProducts().forEach((product) => {
      // Create row
      const trEl = document.createElement("tr");
      trEl.setAttribute("class", "align-middle");

      // Create column product
      const tdProductEl = document.createElement("td");
      const spanProductEl = document.createElement("span");
      spanProductEl.setAttribute("class", "fw-bold");
      spanProductEl.innerText = product.title;
      const pProductEl = document.createElement("p");
      pProductEl.setAttribute("class", "fw-lighter");

      pProductEl.innerText = "Ref: " + product.SKU;
      tdProductEl.appendChild(spanProductEl);
      tdProductEl.appendChild(pProductEl);

      // Create column quantity
      const tdQuantityEl = document.createElement("td");
      const divQuantityEl = document.createElement("div");
      divQuantityEl.setAttribute("class", "d-flex gap-1");
      const buttonRemove = document.createElement("button");
      buttonRemove.setAttribute("class", "btn btn-outline-dark border-0");
      buttonRemove.setAttribute("info-SKU", product.SKU);
      buttonRemove.addEventListener("click", removeProductClickHandler);
      buttonRemove.innerText = "-";
      const spanQuantityEl = document.createElement("span");
      spanQuantityEl.setAttribute("class", "d-block border p-3 rounded");
      spanQuantityEl.innerText = shoppingCart.getProductQuantity(product.SKU);
      const buttonAdd = document.createElement("button");
      buttonAdd.setAttribute("class", "btn btn-outline-dark border-0");
      buttonAdd.setAttribute("info-SKU", product.SKU);
      buttonAdd.addEventListener("click", addProductClickHandler);
      buttonAdd.innerText = "+";

      tdQuantityEl.appendChild(divQuantityEl);
      divQuantityEl.appendChild(buttonRemove);
      divQuantityEl.appendChild(spanQuantityEl);
      divQuantityEl.appendChild(buttonAdd);

      // Create column price
      const tdPriceEl = document.createElement("td");
      tdPriceEl.innerText = product.price;
      const spanPriceEl = document.createElement("span");
      spanPriceEl.innerText = data.currency;

      tdPriceEl.appendChild(spanPriceEl);

      // Create column total
      const tdTotalEl = document.createElement("td");
      tdTotalEl.innerText = shoppingCart.getTotalPrice(product.SKU);
      const spanTotalEl = document.createElement("span");
      spanTotalEl.innerText = data.currency;

      tdTotalEl.appendChild(spanTotalEl);

      // Add elements in table
      tableBodyEl.appendChild(trEl);
      trEl.appendChild(tdProductEl);
      trEl.appendChild(tdQuantityEl);
      trEl.appendChild(tdPriceEl);
      trEl.appendChild(tdTotalEl);
    });
  };

  // Load products in shop
  data.products.forEach((product) => {
    const newProduct = new Product(product.SKU, product.title, product.price);
    shop.setProducts(newProduct);
  });
  console.log(shop.getProducts());

  renderedProducts();
  renderedProductsShooppingCart();
});
