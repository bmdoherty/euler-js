const f = require('./2');

test('sum even financci sequence less than 4', () => {
  expect( f(4) ).toBe( 2 );
});

test('sum even financci sequence less than 4,000,000', () => {
  expect( f(4000000) ).toBe( 4613732 );
});

