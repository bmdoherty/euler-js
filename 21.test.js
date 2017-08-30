const f = require('./21'); 

test('add', () => {
    expect( f(10000) ).toEqual( 31626 );
});

