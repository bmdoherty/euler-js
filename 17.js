
// What is the sum of the digits of the number 21000

const lookupOnes = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty'
]

const lookupTens = [
    '',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
]

const ones = (i) => {
    return lookupOnes[i]
}

const tens = (i, x) => {
    let s = lookupTens[i]

    if(x % 10){
        s = s + '-'
    }

    return s
}

const hundreds = (i, x) => {
    let s =  lookupOnes[i] + ' hundred'

    if( x % 100 ){
        s = s + ' and '
    }

    return s
}

const thousands = (i) => {
    return 'one thousand'
}

const toWords = (x) => {
    let words = ''
    let formats = [thousands,hundreds,tens,ones]
    
    let units = (''+x).split('').map( i => parseInt(i) )

    // pad
    while( units.length < 4){
        units.unshift(0)
    }

    for(let i=0; i<units.length; i++){
        if(units[i]){
            if( i == 2 && units[i] < 2){
                numOfOnes = (units[2] * 10) +  units[3]
                words = words + ones( numOfOnes, x ) 
                break
            }
            else {
                words = words + formats[i]( units[i], x)
            }
        }
    }

    return words
}

const f = (n) => {
    let letterCount = 0

    for(let i=1; i<=n; i++){
        let words = toWords(i)
        letterCount = letterCount + words.replace(/\s/g, '').replace(/-/g, "").length
    }

    return letterCount
}

module.exports = f;