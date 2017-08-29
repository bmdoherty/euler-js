// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

const isleapYear = (y) => {
    // A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
    if( (y % 4 === 0) && (y % 400 === 0)) {
        return true
    }
    
    return false;
}

const daysInMonth = (m,y) => {
    switch (m) {
        // february
        case 2:
            return isleapYear(y) ? 29 : 28
            break
        
        // Thirty days has September, April, June and November.
        case 4: case 6: case 9: case 11:
            return 30
            break
    
        default:
            return 31
    }
}

const isSunday = (d) => {
    return (d % 7 === 0) ? true : false
}

const f = () => {
    let daysPassed = 0
    let sundays = 0

    for(let y=1900; y<=2000; y++){
        for(let m=1; m<=12; m++){
            daysPassed = daysPassed + daysInMonth(m, y)  
            
            if(y>1900 && isSunday(daysPassed) ){
                sundays = sundays + 1 
            }
        }
    }

    return sundays
}

module.exports = f;