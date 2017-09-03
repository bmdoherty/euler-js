const f = require('./31'); 

test('find total', () => {
    expect( f(200,[1,2,5,10,20,50,100,200]) ).toEqual( 73682 );
});
