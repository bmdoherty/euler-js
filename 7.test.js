const f = require('./7');

test('6th prime is 13', () => {
  expect( f(6) ).toBe( 13 );
});

test('10001 prime is ', () => {
    expect( f(10001) ).toBe( 104743 );
});