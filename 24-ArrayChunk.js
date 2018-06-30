// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function doChunk( array, size) {
//   const chunked = [];
//
//   for ( let element in array ) {
//     const lastInChunked = chunked[chunked.length -1];
//     console.log('16-  lastInChunked = ', lastInChunked );
//   }
//   alen = array.length -1;
//
//
// }
//
// doChunk([1,2,3,4,5,6,7,8,9,72,34,62,86,],3);




function chunk(array, size) {
  const chunked = [];

  for (let element of array) {
    console.log(' element =', element);
    const last = chunked[chunked.length - 1];
    // console.log(' last =', last );
    if (!last || last.length === size) {
      console.log(' just before pushing in the element chunked =', chunked);
      chunked.push([element]);
      console.log(' just After pushing in the element chunked =', chunked);
    } else {
      console.log(' inside the else statement last =', last);
      console.log(' before last =', last);
      last.push(element);
      console.log(' after last =', last);
    }
  }

  console.log(' chunked=', chunked);
  return chunked;
}

chunk([1,2,3,4,5,6,7,8,9,72,34,62,86,],3);





=============================


for (var i = 0; i < array.length; i++) {
  OriArr.splice(1,3).newArr.push();
  // do it until theres no element left. 
}


chunk([1,2,3,4,5,6,7,8,9,72,34,62,86,],3);




=============================
