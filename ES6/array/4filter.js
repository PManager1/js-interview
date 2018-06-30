// Do try it witout looking.

let products = [
  { name: 'cucumber', type: 'vegetable', quantity: 5, price: 1 },
  { name: 'cucumber2', type: 'fruit', quantity: 15, price: 14 },
  { name: 'cucumber3', type: 'fruit', quantity: 0, price: 6 },
  { name: 'cucumber4`', type: 'vegetable', quantity: 4, price: 7 }
];


// let output = products.filter(function (p) {
//   return p.type ==='fruit'
// });
// console.log('12-  output = ', output);

// type vegetabels ,  quantity > 0, price less than 10


let output = products.filter(function (p) {
  return  p.type === 'vegetable'
  && p.quantity > 0
  &&  p.price < 10
})

console.log('22-  output = ', output);
// type
