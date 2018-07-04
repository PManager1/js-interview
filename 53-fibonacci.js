// function fibonacci (n) {
//   let result = [0,1];
//
//   for (var i = 2; i < n; i++) {
//     let last = result.length - 1;  // value = 2 but it shoulud be 1
//     let s_last = result.length - 2;
//
//     // let last = result[ i - 1 ];
//     // let s_last = result[ i - 2 ];
//
//     console.log(' last ', last );
//     console.log(' s_last ', s_last );
//
//     let insertion = last + s_last;
//
//     result.push ( insertion );
//     console.log(result );
//   }
//
// console.log(' series = ', result);
//
// }


// fibonacci(5);



function fib(n) {
    if (n < 2){
      return n;
    }
    return fib(n-1) + fib(n-2);
}

console.log(  fib(5) );  
