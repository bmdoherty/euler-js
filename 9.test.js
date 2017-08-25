const f = require('./9');

test('4 adjacent digits in the 1000-digit number that have the greatest product', () => {
  expect( f(12) ).toBe( 60 );
});

test('13 adjacent digits in the 1000-digit number that have the greatest product', () => {
    expect( f(1000) ).toBe( 31875000 );
});

  
  