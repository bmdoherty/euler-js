
const f = (total, coins) => {
    let table = Array(coins.length+1)

    // ways to make nothing is 1 for each coin
    for(let i=0; i<=coins.length; i++){
        table[i] = Array(total+1).fill(0) 
        table[i][0] = 1;
    }

    // start at 1 and look back
    for(let i=1; i<=coins.length; i++){
        let coin = coins[i]
        let coinCombinations = table[i]
        let prevCoin = coins[i-1]
        let prevCoinCombinations = table[i-1]

        for(let amount=1; amount<=total; amount++){

            // previous coin is bigger than amount so so is current coin
            if(prevCoin > amount){
                coinCombinations[amount] = prevCoinCombinations[amount] // ways to make total for previous coin
            }         
            else{
                let a = prevCoinCombinations[amount] // combinstons up to last coin
                let diff = amount-prevCoin           // amount we have to find from previous coin
                let b = coinCombinations[diff]       // lookup combinations for diff amount
                
                coinCombinations[amount] = a + b;
            }   
        }
    }

    return table[coins.length][total];
}
 
module.exports = f