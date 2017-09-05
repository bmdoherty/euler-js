const {sieve, f} = require('./36');

test('find', () => {
    expect( f(1000000) ).toEqual( 872187 );
});