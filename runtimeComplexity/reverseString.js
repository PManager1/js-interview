

function reverse(string) {
  reverse = '';
  for ( let char of string ){
    reverse = char + reverse;
  }
  return reverse;
}

console.log(  reverse('jipsy') );
