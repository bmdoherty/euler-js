"use strict"
console.time("timer")

const request = require('request');

async function getHands () {
  return await new Promise((resolve, reject) => {
     request('https://projecteuler.net/project/resources/p054_poker.txt', (err, res, body) => {
      if (err) {
        reject(err);
      }
      resolve(body);
    });
  });
}

const HighCard = 1      // Highest value card.
const OnePair = 2       // Two cards of the same value.
const TwoPairs = 3      // Two different pairs.
const ThreeOfAKind = 4  // Three cards of the same value.
const Straight = 5      // All cards are consecutive values.
const Flush = 6         // All cards of the same suit.
const FullHouse = 7     // Three of a kind and a pair.
const FourOfAKind = 8   // Four cards of the same value.
const StraightFlush = 9 // All cards are consecutive values of same suit.
//const RoyalFlush = 10   // Ten, Jack, Queen, King, Ace, in same suit.

const cards = {}
cards['2'] = 2
cards['3'] = 3
cards['4'] = 4
cards['5'] = 5
cards['6'] = 6
cards['7'] = 7
cards['8'] = 8
cards['9'] = 9
cards['T'] = 10
cards['J'] = 11
cards['Q'] = 12
cards['K'] = 13
cards['A'] = 14

const winner = (p1, p2) => {
    if(p1.hand > p2.hand){
        return 'p1'
    }
    if(p1.hand < p2.hand){
        return 'p2'
    }    

    for(let i=0; i<p1.kicker.length; i++){
        if( cards[p1.kicker[i]] > cards[p2.kicker[i]]){
            return 'p1'
        }
        if( cards[p1.kicker[i]] < cards[p2.kicker[i]]){
            return 'p2'
        }        
    }

    return 
}
const playHand = (hand) => {
    let handArray = hand.split(' ')
    let p1 = identifyHand(handArray.slice(0,5))
    let p2 = identifyHand(handArray.slice(5))

    return winner(p1, p2)
}

const getValues = (v,i,a) => {
    return v[0]
} 

const getSuits = (v,i,a) => {
    return v[1]
} 

const orderValues = (values, acesHigh) => {
    let pairs = []
    let triplets = []
    let quads = []

    let rest = values.filter( (v,i,a) => {
        let duplicateCount = (a.join('').match(new RegExp(v, "g")) || []).length
        
        if(duplicateCount == 2){
            pairs.push( v )
        }
        if(duplicateCount == 3){
            triplets.push( v )
        }   
        if(duplicateCount == 4){
            quads.push( v )
        }          
        
        return duplicateCount == 1
    })
    
    pairs.sort( (a,b) => cards[b] - cards[a])
    rest.sort( (a,b) => cards[b] - cards[a])

    if(!acesHigh){
        rest.shift()
        rest.push("A")
    }

    return quads.concat(triplets).concat(pairs).concat(rest)
}

const getDuplicates = (values) => {
    let result = new Set()

    values.forEach( (v,i) => {
        if( values.indexOf(v, i+1) > -1){
            result.add(v)
        }
    })
    return result
}

const straight = (values) => {
    let straight = false
    let acesHigh = true
    let sorted = values.sort( (a,b) => cards[b] - cards[a]).join('')
    const acesHighStraightCheck = "AKQJT98765432"
    const acesLowStraightCheck = "A5432"

    if(acesHighStraightCheck.indexOf(sorted) > -1){
        straight = true
    }

    if(acesLowStraightCheck.indexOf(sorted) > -1){
        straight = true
        acesHigh = false
    }

    return [straight, acesHigh]
}

const identifyHand = (a) => {
    // hand properties
    let values = a.map(getValues)
    let suits = a.map(getSuits)
    let [isStraight, acesHigh] = straight(values)
    let distinctValues = new Set(values)
    let kicker = orderValues(values, acesHigh)
    let highestValue = kicker[0]
    let sameSuit = new Set(suits).size == 1
    let duplicates = getDuplicates(kicker)
    let hand

    switch (distinctValues.size) {
        case 2:
            if(duplicates.size > 1){
                hand = FullHouse
            }
            else {
                hand = FourOfAKind
            }
            break;
        case 3: 
            if(duplicates.size > 1){
                hand = TwoPairs                           
            } else {
                hand = ThreeOfAKind               
            }
            break;
        case 4:
            hand = OnePair
            break;            
        case 5:
            if(sameSuit){
                if(isStraight){
                    //if(highestValue == 'A'){
                    //    hand = RoyalFlush                      
                    //} else {
                        hand = StraightFlush                      
                    //}
                } else {
                    hand = Flush                 
                }
            } else {
                if(isStraight){
                    hand = Straight
                } else {
                    hand = HighCard
                }
            }
            break;    
        default:
            hand = HighCard
            break;
    }

    return {'hand':hand, 'kicker':kicker}
}

async function f() {
    let response = await getHands()
    let hands = response.split(/\r?\n/)
    let winners = hands.map( playHand )

    return  winners.filter( v => v == 'p1').map( v => 1).reduce( (s,v) => s = s+v)
}

module.exports = {f, identifyHand, winner, playHand}
console.timeEnd("timer")