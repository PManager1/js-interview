function singup (username, password, email, dob, city ) {
  //create new user
}

function singup_2 ( { username, password, email, dob, city} ) {
  //create new user
  console.log(' username = ', username );
}

const user = {
  username: 'myname',
  password: 'password',
  email: 'myem@g.com',
  dob: '1/2/30'
}

singup_2(user);
