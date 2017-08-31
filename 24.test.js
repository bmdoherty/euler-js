const f = require('./24'); 

test('add', () => {
    expect( f(1000000) ).toEqual( '2783915460' );
});