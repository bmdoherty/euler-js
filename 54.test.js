const {f, identifyHand, winner, playHand} = require('./54'); 

test('identifyHand high card', () => {
    expect( identifyHand(['7C', '8S', 'KC', '9H', '3S']) ).toEqual({'hand':1, 'kicker':["K", "9", "8", "7", "3"]});
});

test('identifyHand one pair', () => {
    expect( identifyHand(['8C', '8S', 'KC', '9H', '4S']) ).toEqual({'hand':2, 'kicker':["8", "8", "K", "9", "4"]});
});

test('identifyHand two pair', () => {
    expect( identifyHand(['8C', '8S', 'KC', 'KH', '4S']) ).toEqual({'hand':3, 'kicker':["K", "K", "8", "8", "4"]});
});

test('identifyHand three of kind', () => {
    expect( identifyHand(['8C', '8S', 'KC', '8H', '4S']) ).toEqual({'hand':4, 'kicker':["8", "8", "8", "K", "4"]});
});

test('identifyHand straight', () => {
    expect( identifyHand(['2C', '3S', '4C', '5H', '6S']) ).toEqual({'hand':5, 'kicker':["6", "5", "4", "3", "2"]});
});

test('identifyHand straight aces high', () => {
    expect( identifyHand(['AC', 'QS', 'KC', 'TH', 'JS']) ).toEqual({'hand':5, 'kicker':["A", "K", "Q", "J", "T"]});
});

test('identifyHand straight aces low', () => {
    expect( identifyHand(['AC', '2S', '3C', '5H', '4S']) ).toEqual({'hand':5, 'kicker':["5", "4", "3", "2", "A"]});
});

test('identifyHand flush', () => {
    expect( identifyHand(['2C', 'AC', '7C', 'JC', '4C']) ).toEqual({'hand':6, 'kicker':["A", "J", "7", "4", "2"]});
});

test('identifyHand full house 1', () => {
    expect( identifyHand(['2C', '2H', '2S', 'JC', 'JH']) ).toEqual({'hand':7, 'kicker':["2", "2", "2", "J", "J"]});
});

test('identifyHand full house 2', () => {
    expect( identifyHand(['2C', '2H', 'JS', 'JC', 'JH']) ).toEqual({'hand':7, 'kicker':["J", "J", "J", "2", "2"]});
});

test('identifyHand four of kind', () => {
    expect( identifyHand(['2C', 'JD', 'JS', 'JC', 'JH']) ).toEqual({'hand':8, 'kicker':["J", "J", "J", "J", "2"]});
});

test('identifyHand straight flush', () => {
    expect( identifyHand(['2C', '3C', '4C', '5C', '6C']) ).toEqual({'hand':9, 'kicker':["6", "5", "4", "3", "2"]});
});

test('identifyHand royal flush', () => {
    expect( identifyHand(['KC', 'JC', 'TC', 'AC', 'QC']) ).toEqual({'hand':9, 'kicker':["A", "K", "Q", "J", "T"]});
});

test('identifyHand Ace', () => {
    expect( identifyHand(['5D', '8C', '9S', 'JS', 'AC']) ).toEqual({'hand':1, 'kicker':["A", "J", "9", "8", "5"]});
});

test('identifyHand pair with kicker 1', () => {
    expect( identifyHand(['QH', 'QC', '9H', '4D', '6S']) ).toEqual({'hand':2, 'kicker':["Q", "Q", "9", "6", "4"]});
});

test('identifyHand pair with kicker 2', () => {
    expect( identifyHand(['QD', 'QS', '3D', '6D', '7H']) ).toEqual({'hand':2, 'kicker':["Q", "Q", "7", "6", "3"]});
});

test('winner royal flush', () => {
    let p1 = {'hand':10, 'kicker':['A', 'K', 'Q', 'J', 'T']}
    let p2 = {'hand':9, 'kicker':['6', '5', '4', '3', '2']}
    expect( winner(p1,p2) ).toEqual('p1');
});

test('winner pair with kicker', () => {
    let p1 = {'hand':2, 'kicker':['Q', 'Q', '9', '6', '4']}
    let p2 = {'hand':2, 'kicker':['Q', 'Q', '7', '6', '3']}
    expect( winner(p1,p2) ).toEqual('p1');
});

test('1: playhand pair 8s beats pair of 5s', () => {
    let hand = '5H 5C 6S 7S KD 2C 3S 8S 8D TD'

    expect( playHand(hand) ).toEqual('p2');
});

test('2: playhand Ace beats Queen', () => {
    let hand = '5D 8C 9S JS AC 2C 5C 7D 8S QH'

    expect( playHand(hand) ).toEqual('p1');
});
    
test('3: playhand flush beats 3 aces', () => {
    let hand = '2D 9C AS AH AC 3D 6D 7D TD QD'

    expect( playHand(hand) ).toEqual('p2');
});

test('4: playhand pair of queens 9 beats 7', () => {
    let hand = '4D 6S 9H QH QC 3D 6D 7H QD QS'

    expect( playHand(hand) ).toEqual('p1');
});

test('5: playhand full house 3 4s beats fullhouse 3 3s', () => {
    let hand = '2H 2D 4C 4D 4S 3C 3D 3S 9S 9D'

    expect( playHand(hand) ).toEqual('p1');
});

test('6: playhand straight aces high beats aces low', () => {
    let hand = 'AH QD KC JD TS AC 5D 4S 3S 2D'

    expect( playHand(hand) ).toEqual('p1');
});

it('works with async/await', async () => {
    expect( await f() ).toEqual(376);
});


// const StraightFlush = 9 // All cards are consecutive values of same suit.
// const RoyalFlush = 10   // Ten, Jack, Queen, King, Ace, in same su
