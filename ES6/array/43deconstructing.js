// Awesome way to convert array of arrays  into array of objects

const points = [
  [4,5],
  [10,1],
  [0,40]
];

var out = points.map((pair) => {
  const [x,y] = pair;

  // const x = pair[0];
  console.log(' x = ', x );
  // const y = pair[1];
  console.log(' y = ', y );

 return { x:x , y:y };

});

console.log(' 19 -  after map out =  ', out );
//  we dont have to do anythign like array.push coz it (map fun) alrready gives an array back
