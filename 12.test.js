const f = require('./12');

test('triangle number with 5 divisors', () => {
    expect( f(5) ).toBe( 28 );
});

test('triangle number with 5 divisors', () => {
    expect( f(500) ).toBe( 76576500 );
});

