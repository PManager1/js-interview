
var colors = ['a', 'b', 'c'];

// we have a forEach method on any array that we have.
// then we pass anonymous function to it.

// colors.forEach( function (color) {
//     console.log(' color = ', color );
// });

let numbers = [1,2,3,4,5,6];
let sum = 0;

function adder(number) {
  console.log(' called in adder');
  sum += number;
}

numbers.forEach(adder);
console.log('20- sum = ', sum );
