const promise = new Promise( function ( r1, r2) {
  console.log(' r1 = ', r1 );
  console.log(' r2 = ', r2 );
  r2();
});

console.log(' promise =', promise );

promise.then(function () {
  console.log('calling then on promise ');
});


promise.catch(function (e) {
  console.log(' promise cached with e =' , e );
})
