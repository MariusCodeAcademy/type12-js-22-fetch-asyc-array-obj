'use strict';
console.log('add-product.js');

let baseUrl = 'https://fakestoreapi.com';

// Taikomes

const addForm = document.forms[0];

// AddEventListener

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Js add form');
});

// functions

function generateCategoryOptions() {
  const categoriesUrl = `${baseUrl}/products/categories`;
  // pasrsisiusti arr

  // generuoti options
}
