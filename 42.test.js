const {f, sumOfWord} = require('./42'); 

test('sumOfWord', () => {
    expect( sumOfWord('SKY') ).toEqual( 55 );
});

// test('score', () => {
//     expect( score( 0, 'COLIN', 0 ) ).toEqual( 53 );
// });

// test('getTotalScore', () => {
//     expect( getTotalScore( ['COLIN','COLIN'] ) ).toEqual( 159 );
// });

it('works with async/await', async () => {
    expect( await f() ).toEqual(871198282);
});
  