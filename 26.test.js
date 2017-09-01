const {f, getCycle} = require('./26'); 

test('get cycle 7', () => {
    expect( getCycle(1,7) ).toEqual( '142857' );
});

test('7', () => {
    expect( f(7) ).toEqual( 7 );
});

// test('1000', () => {
//     expect( f(1000) ).toEqual( 983 );
// });