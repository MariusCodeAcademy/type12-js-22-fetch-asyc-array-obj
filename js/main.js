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
  // prideti try catch
  try {
    const resp = await fetch(url);
    if (!resp.ok) throw 'BAAAAd thing haaapened';
    const dataInJs = await resp.json();
    console.log('dataInJs async ir await ===', dataInJs.data);
  } catch (error) {
    console.warn(error);
  }
}
// getUser();

// parisiusti iskonsolinti visus vardus masyve su async i await
const userUrl = 'https://jsonplaceholder.typicode.com/users';

const getUsersArray = async () => {
  const resp = await fetch(userUrl);
  const dataInJs = await resp.json();
  console.log('dataInJs ===', dataInJs);
  const namesArr = dataInJs.map((userObj) => userObj.name);
  console.log('namesArr ===', namesArr);
};

getUsersArray();
