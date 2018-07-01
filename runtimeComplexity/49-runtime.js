// Run time complexity

// How much power/time is required to run your algo
// if we double the inputs ?


function reverse(str) {
    let reversed = '';

    for ( let character of str ){
      reversed = character + reversed;
      // we keep on adding new character in the front of the partial string.
      console.log(' character = ', character );
      console.log(' reversed = ', reversed );
    }
    return reversed;
}


var out = reverse('jipsy');
console.log(' out =' , out );
