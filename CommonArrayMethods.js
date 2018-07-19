

shift

.push =  pushes the elemnt in the Back/End of the array.
.unshift = pushes the elemnt in the front of the array.

push
pop

<<<<<<<< STRING >>>>>>

slice: extracts part of the string.
const strr = "Hello World";
  strr.slice(1,5);
  "ello"

split =  "abcdef"  GOOGLE IT
split('') = a,b,c,d,e,f;
=> it retuns an array of seperated values

substring():  is similar to slice().
The difference is that substring() cannot accept negative indexes.


replace: replaces specified falue in the string.
let strm = "Please visit Microsoft!";

strm.replace('Microsoft' , 'Google');
"Please visit Google!"





ARRAY METHODS
splice();
The splice() method adds/removes items to/from an array, and returns the removed item(s).


var fruits = ["Banana", "Orange", "Apple", "Mango"];
undefined
fruits.splice(2, 1, "Lemon", "Kiwi");
At position 2, remove 1 item, and add these items.
["Banana", "Orange", "Lemon", "Kiwi", "Mango"]

fruits.splice(2, 2, "Lemon", "Kiwi");
At position 2, remove 2 items, and add these items.

["Banana", "Orange", "Lemon", "Kiwi"]



.map

.filter = The filter() method creates a new array
with all elements that pass the test implemented by the provided function.

function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.filter(isBelowThreshold));
==========================================================

.forEach


==========================================================
.every =  The every() method tests whether all elements in
the array pass the test implemented by the provided function.

function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
==========================================================










==========================================================


math.ceil
