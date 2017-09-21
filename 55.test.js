const {f, isPalindome, isLychrel} = require('./55'); 

test('isPalindome 121', () => {
    expect( isPalindome(121) ).toEqual( true );
}); 

test('isPalindome 123', () => {
    expect( isPalindome(123) ).toEqual( false );
}); 

test('isLychrel 47', () => {
    expect( isLychrel(47) ).toEqual( false );
}); 

test('isLychrel 89', () => {
    expect( isLychrel(89) ).toEqual( false );
});

test('isLychrel 196', () => {
    expect( isLychrel(196) ).toEqual( true );
});

test('isLychrel 295', () => {
    expect( isLychrel(295) ).toEqual( true );
});

test('isLychrel 3675', () => {
    expect( isLychrel(3675) ).toEqual( true );
});

test('isLychrel 4994', () => {
    expect( isLychrel(4994) ).toEqual( true );
}); 

test('isLychrel 10677', () => {
    expect( isLychrel(10677) ).toEqual( true );
}); 

test('f', () => {
    expect( f(10000) ).toEqual( 249 );
}); 



