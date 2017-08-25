const f = require('./3'); 

test('largest prime factor of 13195', () => {
  expect( f(13195) ).toBe( 29 );
});

test('largest prime factor of 600851475143', () => {
    expect( f(600851475143) ).toBe( 6857 );
  });

