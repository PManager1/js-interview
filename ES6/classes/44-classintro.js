function Car (options) {
  this.title = options.title;
  this.price = options.price;
}

Car.prototype.speak = function () {
  return 'vroom';
};

Car.prototype.drive = function () {
  return 'drive - vroom';
};

const car = new Car ({ title: 'Focus', price: '120k' });

console.log(' 9- car.price =', car.drive());
