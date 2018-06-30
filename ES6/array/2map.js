

// using map ,  gets

// The map() method creates a new array
// with the results of calling a provided function on every element in the calling array.

let arr = [5,2,3,4,5];

let doubled = [];

arr.map(function (n) {
  console.log(' 10 - n =', n*n );
  doubled.push(n*n);
});

let doubledArr = arr.map(function (n) {
  console.log(' 10 - n =', n*n );
  // doubled.push(n*n);
  return n*n;
});

console.log(' 19 -   doubledArr = ',  doubledArr );


console.log(' doubled = ', doubled);
