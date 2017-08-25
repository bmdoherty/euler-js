const f = require('./8');

test('4 adjacent digits in the 1000-digit number that have the greatest product', () => {
  expect( f(4) ).toBe( 5832 );
});

test('13 adjacent digits in the 1000-digit number that have the greatest product', () => {
    expect( f(13) ).toBe( 23514624000 );
});

  
  