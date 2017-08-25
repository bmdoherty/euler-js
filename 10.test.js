const f = require('./10');

test('The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17', () => {
  expect( f(10) ).toBe( 17 );
});

test('The sum of the primes below 2 million', () => {
    expect( f(2000000) ).toBe( 142913828922 );
});

  
  