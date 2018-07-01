

// find problem is that it returns only the first found object and it doesnt look for next one.


var users = [
  { name: 'Jill'},
  { name: 'Alex'},
  { name: 'Bill'},
];

var user;

var out = users.find(function (u) {
  return u.name === 'Alex';
});

console.log(' out = ', out );
