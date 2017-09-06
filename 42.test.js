const {f, sumOfWordChars, isTriangleWord} = require('./42'); 

test('sumOfWord', () => {
    expect( sumOfWordChars('SKY') ).toEqual( 55 );
});

test('isTriangleWord', () => {
    expect( isTriangleWord('SKY') ).toEqual( true );
});

it('works with async/await', async () => {
    expect( await f() ).toEqual( 162 );
});
  