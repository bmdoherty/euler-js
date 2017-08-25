const f = require('./4');

test('largest palindrome made from the product of two 2-digit numbers', () => {
  expect( f(2) ).toBe( 9009 );
});

test('largest palindrome made from the product of two 3-digit numbers', () => {
    expect( f(3) ).toBe( 906609 );
});
  
  