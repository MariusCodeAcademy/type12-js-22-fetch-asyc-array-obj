'use strict';
console.log('single-preke.js');

const contEl = document.querySelector('.container');

// gauti url query parametra
// let queryParams = new URLSearchParams(window.location.search);
// const currentProductId = queryParams.get('id');
// console.log('currentProductId ===', currentProductId);

/**
 * Returs query param from URL
 * @param {string} param
 * @returns param value
 * getParam('id');
 */
function getParam(param) {
  let queryParams = new URLSearchParams(window.location.search);
  return queryParams.get(param);
}

const currentProductId = getParam('id');

let url = 'https://fakestoreapi.com/products';

// parasyti funkcija kuriai duodam argumentu koki query parametra norim gaut ir ji grazina mums reiksme
// getParam('id') => 3
getSingleProduct(`${url}/${currentProductId}`).then((currentItemObj) => {
  contEl.innerHTML = '';
  contEl.append(makeOneCard(currentItemObj));
});

async function getSingleProduct(urlSingle) {
  const resp = await fetch(urlSingle);
  const singleProduct = await resp.json();
  console.log('singleProduct ===', singleProduct);
  return singleProduct;
}

// siusti uzklausa i fake store api single
// gauti single produkta

// sugeneruoti html (makeOneCard())

function makeOneCard(shopObj) {
  // pagaminam ir grazinam viena item
  // img, price, title, category
  // console.log('shopObj ===', shopObj);
  const divEl = document.createElement('div');
  divEl.className = 'shop-item card';
  divEl.innerHTML = `
  <img src="${shopObj.image}" alt="preke">
  <h3>${shopObj.title}</h3>
  <p class="price">€${shopObj.price.toFixed(2)}</p>
  <p>Category: ${shopObj.category}</p>
  <p>${shopObj.description}</p>
  <div class="control">
    <button class="buy-btn">Buy</button>
    <a href="index.html" >Back</a>
  </div>
  `;
  return divEl;
}
