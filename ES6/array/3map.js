let cars = [
  { model: 'Buick', price: 'cheap'},
  { model: 'Camaro', price: 'expensive'},
  { model: 'Benz', price: 'v-expensive'}
];

var prices = cars.map(function (car) {
    // console.log(' car.model =', car.model);
    return car.price;
});

console.log(' prices = ', prices );
