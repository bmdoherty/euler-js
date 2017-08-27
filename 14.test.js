const f = require('./14');

test('longest collatz chain under 20', () => {
    expect( f(20) ).toBe( 18 );
});

test('slongest collatz chain under 20', () => {
    expect( f(1000000) ).toBe( 837799 );
});
