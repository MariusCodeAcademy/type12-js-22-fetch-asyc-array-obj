'use strict';
console.log('main.js');

// fetch
const url = 'https://reqres.in/api/users/5';

// gauti ir iskonsolinti sito user objekta

// fetch(url)
//   .then((resp) => resp.json())
//   .then((dataInJs) => console.log('dataInJs ===', dataInJs.data))
//   .catch((err) => console.warn(err));

// async ir await
async function getUser() {
  const resp = await fetch(url);
  const dataInJs = await resp.json();
  console.log('dataInJs async ir await ===', dataInJs.data);
}
getUser();
