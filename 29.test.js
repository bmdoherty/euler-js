const f = require('./29'); 

test('find seq length', () => {
    expect( f(2,5) ).toEqual( 15 );
});

test('find seq length', () => {
    expect( f(2,100) ).toEqual( 9183 );
});
