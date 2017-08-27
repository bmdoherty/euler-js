const f = require('./15');

test('How many routes are there through a 2×2 grid?', () => {
    expect( f(2) ).toBe( 6 );
});

test('How many such routes are there through a 20×20 grid?', () => {
    expect( f(20) ).toBe( 137846528820 );
});
