const f = require('./1'); 

test('sum natural numbers beow 10 that are multiples of 3 or 5', () => {
  expect(f(10)).toBe(23);
});

test('sum natural numbers beow 1000 that are multiples of 3 or 5', () => {
    expect(f(1000)).toBe(233168);
});