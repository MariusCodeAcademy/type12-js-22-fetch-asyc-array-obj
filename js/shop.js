'use strict';
console.log('shop.js');

const url = 'https://fakestoreapi.com/products';

async function getProducts() {
  const resp = await fetch(url);
  const dataInJS = await resp.json();
  console.log('dataInJS ===', dataInJS);
}
getProducts();
