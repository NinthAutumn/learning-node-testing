var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  //check if email already exists
  //Save the user to the database
  //Send the welcome email
  db.saveUser({
    email,
    password
  });
};