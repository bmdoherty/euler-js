const {f, add, subtract, multiply} = require('./20');

test('add', () => {
    expect( add( [0],  [ 7, 9, 8, 3, 3, 6, 0, 0 ]) ).toEqual( [ 7, 9, 8, 3, 3, 6, 0, 0 ] );
});

test('add', () => {
    expect( add( [1], [0,0]) ).toEqual( [1] );
});

test('add', () => {
     expect( add( [ 7, 9, 8, 3, 3, 6, 0, 0 ], [ 3, 9, 9, 1, 6, 8, 0, 0, 0 ]) ).toEqual( [4,7,9,0,0,1,6,0,0] );
});

test('add', () => {
    expect( add( [0], [2,0]) ).toEqual( [2,0] );
});

test('add', () => {
    expect( add( [9,9,9,9], [1] ) ).toEqual( [1,0,0,0,0] );
});

test('add', () => {
    expect( add( [4,1], [5,1] ) ).toEqual( [9,2] );
});

test('subtract', () => {
     expect( subtract([2],[1]) ).toEqual( [1] );
});

test('subtract', () => {
    expect( subtract([2,0],[1]) ).toEqual( [1,9] );
});

test('subtract', () => {
    expect( subtract([1,0,0,0],[1]) ).toEqual( [9,9,9] );
});

test('subtract', () => {
    expect( subtract([1,0,0,0],[9,9,9]) ).toEqual( [1] );
});

test('multiply', () => {
    expect( multiply([ 3, 9, 9, 1, 6, 8, 0, 0 ],[1,2]) ).toEqual( [4,7,9,0,0,1,6,0,0] ); 
});

test('multiply', () => {
    expect( multiply([1],[2,0]) ).toEqual( [2,0] ); 
});

test('multiply', () => {
    expect( multiply([2,0],[1,0,0]) ).toEqual( [2,0,0,0] ); 
});

test('', () => {
    expect( f(10) ).toBe( 27 );
});

test('', () => {
    expect( f(11) ).toBe( 36 );
});

test('', () => {
    expect( f(12) ).toBe( 27 );
});

test('', () => {
    expect( f([100]) ).toBe( 648 );
});
