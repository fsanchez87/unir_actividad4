const shop = new Shop();
const shoppingCart = new ShoppingCart();

document.addEventListener("DOMContentLoaded", () => {
  
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
      // TODO add data attributes
      buttonRemove.innerText = "-";
      const spanQuantityEl = document.createElement("span");
      spanQuantityEl.setAttribute("class", "d-block border p-3 rounded");
      spanQuantityEl.innerText = 0;
      const buttonAdd = document.createElement("button");
      buttonAdd.setAttribute("class", "btn btn-outline-dark border-0");
      // TODO add data attributes
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
      const tdTotal = document.createElement("td");
      let contentTotal = "";
      contentTotal += `0<span>€</span>`;
      tdTotal.innerHTML = contentTotal;

      // Add elements in table
      tableBodyEl.appendChild(trEl);
      trEl.appendChild(tdProductEl);
      trEl.appendChild(tdQuantityEl);
      trEl.appendChild(tdPriceEl);
      trEl.appendChild(tdTotal);
    });
  };

  // Load products in shop
  data.products.forEach((product) => {
    const newProduct = new Product(product.SKU, product.title, product.price);
    shop.setProducts(newProduct);
  });
  console.log(shop.getProducts());

  renderedProducts();
});
