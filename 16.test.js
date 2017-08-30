const {f, multiply} = require('./16');

test('8*2 = 16,  the sum of its digits', () => {
    expect( multiply([8,0], [2,0]) ).toEqual( [1,6,0,0] );
});

test('8*2 = 16,  the sum of its digits', () => {
    expect( multiply([1,6], [2]) ).toEqual( [3,2] );
});

test('multiply', () => {
    expect( multiply([2,0],[1,0,0]) ).toEqual( [2,0,0,0] ); 
});

test('2^2 = 4,  the sum of its digits', () => {
    expect( f(2, 2) ).toBe( 4 );
});

test('2^4 = 16,  the sum of its digits', () => {
    expect( f(2, 4) ).toBe( 7 );
});

test('2^15 = 32768,  the sum of its digits', () => {
    expect( f(2, 15) ).toBe( 26 );
});
 
test('2^1000  the sum of its digits', () => {
    expect( f(2, 1000) ).toBe( 1366 );
}); 
