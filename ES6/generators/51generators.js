
function* shopping() {

  // stuff on the sidewalk ;

  // walking down the sidewalk ;

  // go into the store with cash ;
  const stuffFromStore = yield 'cash';

  // walking back home
  return stuffFromStore
}

// stuff in the store
const gen = shopping();

gen.next();  // leaving our house
gen.next('groceries');  // leaving the store with groceries.
