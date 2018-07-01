const Google = {
  locations: ['M view', 'Ny', 'London']
};

const { locations } = Google;
// console.log(' 8 - locations ', locations );

const { locations:[ location ] } = Google;
console.log(' 10 -  location =', location );
