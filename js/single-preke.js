'use strict';
console.log('single-preke.js');

// gauti url query parametra
let queryParams = new URLSearchParams(window.location.search);
const currentProductId = queryParams.get('id');
console.log('currentProductId ===', currentProductId);

// siusti uzklausa i fake store api single
// gauti single produkta

// sugeneruoti html (makeOneCard())
