const f = require('./16');

test('2^15 = 32768,  the sum of its digits', () => {
    expect( f(2, 15) ).toBe( 26 );
});

test('2^1000  the sum of its digits', () => {
    expect( f(2, 1000) ).toBe( 1366 );
});
