var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
var sorted_arr = arr.slice().sort(); // You can define the comparing function here.
                                     // JS by default uses a crappy string compare.
                                     // (we use slice to clone the array so the
                                     // original array won't be modified)

var results = [];
for (var i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
}

console.log(results);


// this is great way to just putting the list of elements in a new array itself,

// my way was too big =>
let array = [1,2,3,1,4,5,6];
for (var i = 0; i < array.length; i++) {

  for (var j = 0; j < array.length; j++) {
    if ( array[i]  == array[j]  )  {
      array.pop( array[i] );
    }
  }
}
