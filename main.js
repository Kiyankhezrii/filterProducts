import { products } from "./products.js";

// get element from DOM
const input = document.querySelector(".form-input");
const searchTitle = document.querySelector(".search-item");
const productsContainer = document.querySelector(".container");

let productsFilter = [];

const search = {
  filterSearch: "",
};

const renderProducts = function (product) {
  const html = `
        <div class="product">
          <div class="img-container">
            <img
              src="${product.image}"
              alt="products"
              class="product__img"
            />
          </div>
          <div class="product-info">
            <p class="price">$ ${product.price}</p>
            <p class="title">${product.title}</p>
          </div>
        </div>
    `;
  productsContainer.insertAdjacentHTML("afterbegin", html);
};

document.addEventListener("DOMContentLoaded", (e) => {
  products.forEach((p) => renderProducts(p));
});

input.addEventListener("input", (e) => {
  productsFilter = products.filter((p) => {
   return p.title.startsWith(e.target.value.toLowerCase());
  });
  console.log(productsFilter)
  productsContainer.innerHTML = "";
  productsFilter.forEach((p) => renderProducts(p));
});
