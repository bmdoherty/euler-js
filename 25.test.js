const f = require('./25'); 

test('irst 3 digit fibinacci number', () => {
    expect( f(3) ).toEqual( 12 );
});

test('irst 10 digit fibinacci number', () => {
    expect( f(1000) ).toEqual( 4782 );
});