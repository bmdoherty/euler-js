const f = require('./35');

// test('find', () => {
//     expect( f(100) ).toEqual( 13 );
// });

test('find', () => {
    expect( f(1000000) ).toEqual( 55 );
});