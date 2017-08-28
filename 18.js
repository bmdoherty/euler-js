// Find the maximum total from top to bottom of the triangle below:
let t = Array(15)

t[0] = [75]
t[1] = [95, 64]
t[2] = [17, 47, 82]
t[3] = [18, 35, 87, 10]
t[4] = [20, 4, 82, 47, 65]
t[5] = [19, 1, 23, 75, 3, 34]
t[6] = [88, 2, 77, 73, 7, 63, 67]
t[7] = [99, 65, 4, 28, 6, 16, 70, 92]
t[8] = [41, 41, 26, 56, 83, 40, 80, 70, 33]
t[9] = [41, 48, 72, 33, 47, 32, 37, 16, 94, 29]
t[10] = [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14]
t[11] = [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57]
t[12] = [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48]
t[13] = [63, 66, 4 , 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31]
t[14] = [4 , 62, 98, 27, 23, 9 , 70, 98, 73, 93, 38, 53, 60, 4 , 23]

const f = () => {

    while(t.length > 1){
        let i = t.length

        let secondToLastRow = t[i-2]
        let lastRow = t[i-1]
        let newRow = []

        for(let j = 0; j < secondToLastRow.length; j++){

            let a = secondToLastRow[j]
            let b = lastRow[j]
            let c = -1

            if(lastRow[j+1]){
                c = lastRow[j+1]
            }
            
            ((a+b) > (a+c)) ? newRow.push(a+b) : newRow.push(a+c)
        }

        t[i-2] = newRow
        t.pop()
    }

    return t[0][0]
}

module.exports = f;