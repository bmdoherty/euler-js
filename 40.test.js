const f = require('./40');

test('find', () => {
    expect( f([1,10,100,1000,10000,100000,1000000]) ).toEqual( 210 );
});