const f = require('./6'); 

test('difference between the sum of the squares of the first ten natural numbers and the square of the sum', () => {
  expect( f(1,10) ).toBe( 2640 );
});

test('difference between the sum of the squares of the first 100 natural numbers and the square of the sum', () => {
    expect( f(1,100) ).toBe( 25164150 );
});

  
  