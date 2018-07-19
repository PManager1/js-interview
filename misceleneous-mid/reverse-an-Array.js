// Run time complexity

// How much power/time is required to run your algo
// if we double the inputs ?


function reverse(str) {
    let reversed = '';

    for ( let character of str ){
      reversed = character + reversed;
      // we keep on adding new character in the front of the partial string.
      // run it, you'll see the action in console.log
      console.log(' character = ', character );
      console.log(' reversed = ', reversed );
    }
    return reversed;
}


var out = reverse('jipsy');
console.log(' out =' , out );


FOR ARRAY =

https://stackoverflow.com/questions/32418443/reverse-array-in-place
