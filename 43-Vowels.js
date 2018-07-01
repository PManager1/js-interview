let string = "Hello There!";
let vowels = ['a','e','i','o','u'];


let total = 0;

for ( let str of string.toLowerCase() ) {

    if (("aeiou").includes(str)) {
      console.log(' yes ');
      total += 1;
    }
}


console.log('16 total = ', total );
