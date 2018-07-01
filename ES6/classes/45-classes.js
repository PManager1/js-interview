function Car (options) {
  this.title = options.title;
}

Car.prototype.drive = function () {
  return 'drive - vroom';
};

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

// const car = new Car ({ title: 'Focus', price: '120k' });
// console.log(' 9- car.price =', car.drive());

const toyota = new Toyota ( { color: 'Blue', title : 'the title car' });
console.log(' 18- toyota.color =', toyota);
