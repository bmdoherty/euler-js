const {sieve, f} = require('./37');

test('find', () => {
    expect( f(999999) ).toEqual( 748317 );
});
