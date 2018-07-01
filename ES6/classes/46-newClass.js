class Car {
  constructor (options) {
    console.log(' callign constructor ');
    this.title = options.title;
  }

  drive() {
    return 'driving sir';
  }
}

class Toyota extends Car {
  constructor ( options ) {
    super(options);   // Car.construtor.
    this.color = options.color;
  }

  honk(){
    return 'Toyota Honking';
  }

}


// const car = new Car ({ title : "Bentl`ey" });
// console.log(' car.title = ', car.title );
// console.log(' car = ', car.drive() );`

const toyota = new Toyota ({ color : "red", title: 'the title ' })
console.log('29 -  toyota.honk() = ', toyota.honk() );
console.log('30 -  toyota = ', toyota );
