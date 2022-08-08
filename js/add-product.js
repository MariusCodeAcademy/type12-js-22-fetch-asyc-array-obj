'use strict';
console.log('add-product.js');

let baseUrl = 'https://fakestoreapi.com';

// Taikomes
const selectEl = document.getElementById('category');
const addForm = document.forms[0];

// Lifecycle of our app
function init() {
  initCategories();
}
init();

// AddEventListener

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Js add form');
  const { title, price, description, image, category } = addForm.elements;
  const newProductObj = {
    title: title.value,
    price: price.value,
    description: description.value,
    image: image.value,
    category: category.value,
  };
  console.log('newProductObj ===', newProductObj);
  createNewProduct(newProductObj);
});

// functions

async function createNewProduct(productObj) {
  const newProductUrl = `${baseUrl}/products`;
  const resp = await fetch(newProductUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productObj),
  });
  console.log('resp ===', resp);
  if (resp.status === 200) {
    // redirect to home page
    window.location.href = '/';
  }
  const dataInJs = await resp.json();
  console.log('dataInJs ===', dataInJs);
}

async function initCategories() {
  const categoriesUrl = `${baseUrl}/products/categories`;
  // pasrsisiusti arr
  const resp = await fetch(categoriesUrl);
  const catArr = await resp.json();
  console.log('catArr ===', catArr);
  // generuoti options
  generateItems(catArr);
}

function generateItems(arr) {
  arr.forEach((cat) => {
    const optionEl = document.createElement('option');
    optionEl.value = cat;
    optionEl.textContent = cat;
    selectEl.append(optionEl);
  });
}
