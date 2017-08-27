const f = require('./14');

test('longest collatz chain under 20', () => {
    expect( f(20) ).toBe( 8348422521);
});

// test('sum 100, first 10 digits', () => {
//     expect( f(100) ).toBe( 5537376230 );
// });
