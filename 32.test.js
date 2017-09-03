const f = require('./32');

test('find', () => {
    expect( f([1,2,3,4,5,6,7,8,9]) ).toEqual( 45228 );
});