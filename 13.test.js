const f = require('./13');

test('sum 2, first 10 digits', () => {
    expect( f(2) ).toBe( 8348422521);
});

test('sum 100, first 10 digits', () => {
    expect( f(100) ).toBe( 5537376230 );
});
