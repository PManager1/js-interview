var str = 'aeiea';

var midpoint1 = Math.ceil(str.length/2);

console.log( 'midpoint1 =', midpoint1 );

var strArr = str.split('').reverse().join('');

console.log('8- strArr = ',  strArr  );

if (str === strArr) {
    console.log(' yes Palindome ');
}
else {
    console.log(' No Palindome ');
}
