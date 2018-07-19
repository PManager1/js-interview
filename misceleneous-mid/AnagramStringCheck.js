var st1 = 'abcdef';
var st2 = 'fedcba';

var sort1 = st1.split('').sort();
var sort2 = st2.split('').sort();

console.log(' sort 1 ', sort1);
console.log(' sort 2 ', sort2);

if (sort1.length != sort2.length) {
  console.log(' not an anagram ');
  return;
}
else {


for (var i = 0; i < sort1.length; i++) {
  console.log(' 11 - for loop ');
  if (sort1[i] === sort2[i] ) {
    console.log('13-  yes equal === ',  sort2[i] );
    continue;
  }
  else {
    console.log('not an anagram');
  }
}


}
