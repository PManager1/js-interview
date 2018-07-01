class Car {
  constructor (options) {
    console.log(' callign constructor ');
    this.title = options.title;
  }
  drive() {
    return 'driving sir';
  }
}

const car = new Car ({ title : "Bentley" });
console.log(' car.title = ', car.title );
console.log(' car = ', car.drive() );
