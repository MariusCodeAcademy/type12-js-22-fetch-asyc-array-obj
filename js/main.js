'use strict';
console.log('main.js');

// fetch
const url = 'https://reqres.in/api/users/5';

// gauti ir iskonsolinti sito user objekta

fetch(url)
  .then((resp) => resp.json())
  .then((dataInJs) => console.log('dataInJs ===', dataInJs.data))
  .catch((err) => console.warn(err));
