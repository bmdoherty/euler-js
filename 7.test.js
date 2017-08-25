const f = require('./7');

test('6th prime is 13', () => {
  expect( f(6) ).toBe( 13 );
});

test('difference between the sum of the squares of the first 100 natural numbers and the square of the sum', () => {
    expect( f(10001) ).toBe( 104743 );
});

  
  