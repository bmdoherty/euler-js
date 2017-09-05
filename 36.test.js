const {sieve, f} = require('./36');

test('find', () => {
    expect( sieve(203).length ).toEqual( 30 );
});

test('find', () => {
    expect( sieve(1000000).length ).toEqual( 1999 );
});

test('find', () => {
    expect( f(1000000) ).toEqual( 55 );
});