const f = require('./11');

test('largest number', () => {
    expect( f(1) ).toBe( 99 );
  });

test('largest 4 adjacent line product', () => {
  expect( f(4) ).toBe( 70600674 );
});
