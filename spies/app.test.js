const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

// app.__set__
// app.__get__
describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Andrew', 25);
    expect(spy).toHaveBeenCalledWith('Andrew', 25);
  });

  it('should call saveUser wit huser object', () => {
    var email = 'arif.iwamoto@gmail.com';
    var password = 'awrgsgkvkoysdg';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({
      email,
      password
    });
  });
});