'use strict';
console.log('shop.js');

let url = 'https://fakestoreapi.com/products';
url = 'data/prod.json';

// taikomes
const shopItemsEl = document.getElementById('shop-items');
const sortPriceBtnEl = document.getElementById('sort-price');
const searchEl = document.getElementById('search');
const searchBtnEL = document.getElementById('search-btn');

// main Shop state
let mainShopItemsArr = [];

// pagrindinis veiksmas ------------------------------------------------------
getProducts().then((items) => makeShopItemsList(items));
// getProducts();

let sortedAsc = false;

// event listeners --------------------------------------------------
sortPriceBtnEl.addEventListener('click', () => {
  const sorted = mainShopItemsArr.sort((aObj, bObj) => aObj.price - bObj.price);
  makeShopItemsList(sorted);
  // vietoj slice paduodi isrikuota masyva pagal kaina

  // antra karta paspaudus isrikiuoti kita eiles tvarka
});

searchBtnEL.addEventListener('click', () => {
  console.log('search event', searchEl.value);
  const searchTerm = searchEl.value.trim();
  // ir paieskos termina ir stringa kuriame ieskom padarto lowercase pries ieskant
  const filteredItems = mainShopItemsArr.filter((shObj) => shObj.title.includes(searchTerm));
  console.log('filteredItems ===', filteredItems);
  makeShopItemsList(filteredItems);
});

// funkcijos --------------------------------------------------------------
async function getProducts() {
  const resp = await fetch(url);
  const dataInJS = await resp.json();
  console.log('dataInJS ===', dataInJS);
  mainShopItemsArr = dataInJS;
  return dataInJS;
  // makeShopItemsList(dataInJS);
}

function makeShopItemsList(shopItemsArr) {
  shopItemsEl.innerHTML = '';

  shopItemsArr.forEach((itemObj) => {
    const oneItemHtmlEl = makeOneCard(itemObj);
    shopItemsEl.append(oneItemHtmlEl);
  });
}

/**
 * 
 * <div class="shop-item card">
        <img src="" alt="preke">
        <h3>title</h3>
        <p class="price">100</p>
        <p>Category: kazkas</p>
      </div> 
 */
function makeOneCard(shopObj) {
  // pagaminam ir grazinam viena item
  // img, price, title, category
  const divEl = document.createElement('div');
  divEl.className = 'shop-item card';
  divEl.innerHTML = `
  <img src="${shopObj.image}" alt="preke">
  <h3>${shopObj.title}</h3>
  <p class="price">€${shopObj.price.toFixed(2)}</p>
  <p>Category: ${shopObj.category}</p>
  <div class="control">
    <button class="buy-btn">Buy</button>
    <button>More info</button>
  </div>
  `;
  return divEl;
}
