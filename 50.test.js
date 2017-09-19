const f = require('./50'); 

// test('f', () => {
//     expect( f(100) ).toEqual( 41 );
// }); 

// test('f', () => {
//     expect( f(1000) ).toEqual( 953 );
// }); 

test('f', () => {
    expect( f(1000000) ).toEqual( 997651 );
}); 