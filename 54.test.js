const {f, getTotalScore, score, sumOfLetters} = require('./22'); 

test('sumOfLetters', () => {
    expect( sumOfLetters( 0, 'C', 0 ) ).toEqual( 3 );
});

test('score', () => {
    expect( score( 0, 'COLIN', 0 ) ).toEqual( 53 );
});

test('getTotalScore', () => {
    expect( getTotalScore( ['COLIN','COLIN'] ) ).toEqual( 159 );
});

it('works with async/await', async () => {
    expect( await f() ).toEqual(871198282);
});
  