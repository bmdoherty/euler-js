const {f, identifyHand, winner, playHand} = require('./96'); 

// it('hidden singles', async () => {
//     expect( await f(0) ).toEqual(483); 
// });

// it('hidden singles', async () => {
//     expect( await f(5) ).toEqual(483); 
// });

// it('nakedSingle, lockedCandidate, nakedDouble, hiddenDouble & XWings', async () => {
//     expect( await f(6) ).toEqual(143); 
// });

// it('works with async/await', async () => {
//     expect( await f(45) ).toEqual(954); //24702
// });

// it('works with async/await', async () => {
//     expect( await f(46) ).toEqual(159); //24702
// });

// it('works with async/await', async () => {
//     expect( await f(47) ).toEqual(861); //24702
// });

// it('works with async/await', async () => {
//     expect( await f(48) ).toEqual(294); //24702
// });

// it('works with async/await', async () => {
//     expect( await f(49) ).toEqual(351); //24702
// });

it('works with async/await', async () => {
    expect( await f() ).toEqual(24702); //24702
});
