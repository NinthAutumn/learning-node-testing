const expect = require('expect');




const util = require('./utils')

describe('utils', () => {
  it('should add two numbers', () => {
    var res = util.add(33, 11);
    expect(res).toBe(44).toBeA('number');
  });


  it('should async add two numbers', (done) => {
    util.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });

  })



  it('should square a number', () => {
    var res = util.square(10);

    expect(res).toBeA('number').toBe((10 * 10));

  });

  it('should async square a number', (done) => {
    util.asyncSquare(4, (square) => {
      expect(square).toBe(16).toBeA('number');
      done();
    });

  })

  it('should set first and last names', () => {
    var user = {
      location: 'japan',
      age: 19
    };
    var res = util.setName(user, 'Arif Iwamoto');
    expect(res).toInclude({
      firstName: "Arif",
      lastName: "Iwamoto"
    });
  })

  it('should expect some values', () => {
    // expect(12).toNotBe(11);
    // expect({
    //   name: 'andrew'
    // }).toNotEqual({
    //   name: 'Andrew'
    // });

    // expect([2, 3, 4]).toExclude(5);

    expect({
      name: "Arif",
      age: 19,
      location: 'Japan'
    }).toInclude({
      age: 19
    })
  });
})





//npm run test-watch