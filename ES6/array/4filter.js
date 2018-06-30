// Do try it witout looking. 

let products = [
  { name: 'cucumber', type: 'vegetable' },
  { name: 'cucumber', type: 'fruit' },
  { name: 'cucumber', type: 'fruit' },
  { name: 'cucumber', type: 'vegetable' },
];


let output = products.filter(function (p) {
  return p.type ==='fruit'
});

console.log('12-  output = ', output);
