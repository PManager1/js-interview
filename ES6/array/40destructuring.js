// const companies = [
//   'Google',
//   'Facebook',
//   'Uber'
// ];
//
// const [ name, name2, ...rest ] = companies;
// console.log(' name = ', name );
// console.log(' name2 = ', name2 );
// console.log(' rest = ', rest );



const companies = [
  { name: 'Google', location: 'M View'},
  { name: 'Facebook', location: 'Menlo'},
  { name: 'Uber', location: 'SF'}
];


const [ name, name2, ...rest ] = companies;
console.log(' name = ', name.location );
console.log(' name2 = ', name2.location );
console.log(' rest = ', rest );

// the evaluation goes from out to inside i.e from [] to { }
// this is almost equivalent to {name.location}
const [ {location} ] = companies;
console.log('26-  location =  ', location );
