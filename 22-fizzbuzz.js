// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz


function fizzfun(n) {
  console.log('17 - n = ', n );
  // for ( let char of str ){

  for (var i = 1; i <= n; i++) {
    console.log('21-  inside for loop i =', i );

  if (i % 3  == 0 &&  i % 5  == 0 ) {
    console.log('  Fizzbuzz & i = ', i);
  }
 else if ( i % 3  == 0 ) {
       console.log('  Fizz & i = ', i);
 }
 else if ( i % 5  == 0 ) {
       console.log('Buzz & i = ', i);
 }
 }

}

fizzfun(16);
