import { products } from "./products.js";

// get element from DOM
const input = document.querySelector(".form-input");
const searchTitle = document.querySelectorAll(".search-item__link");
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
    return p.title.toLowerCase().startsWith(e.target.value.toLowerCase());
  });
  console.log(productsFilter);
  productsContainer.innerHTML = "";
  productsFilter.forEach((p) => renderProducts(p));
});

searchTitle.forEach((title) => {
  title.addEventListener("click", (e) => {
    const filterdTitle = e.target.dataset.search;
    const filteredProducts = products.filter((p) => {
      return p.title.toLowerCase().startsWith(filterdTitle.toLowerCase());
    });
    productsContainer.innerHTML = "";
    filteredProducts.forEach((p) => renderProducts(p));
  });
});
