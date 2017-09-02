const f = require('./28'); 

test('snake 1', () => {
    expect( f(1) ).toEqual( 1 );
});

test('snake 3', () => {
    expect( f(3) ).toEqual( 25 );
});

test('snake 5', () => {
    expect( f(5) ).toEqual( 101 );
});

test('snake', () => {
    expect( f(1001) ).toEqual( 669171001 );
});
