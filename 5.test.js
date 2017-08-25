const f = require('./5');

test('the smallest number that can be divided by each of the numbers from 1 to 10', () => {
  expect( f(1, 10) ).toBe( 2520 );
});

test('the smallest number that can be divided by each of the numbers from 1 to 20', () => {
    expect( f(1, 20) ).toBe( 232792560 );
});

  
  