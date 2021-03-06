// Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
// By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
// find the sum of the even-valued terms.


function* fibonacci() {
    var x = [];
    x[1] = 1;
    x[2] = 2;
    x[3] = undefined;

    while (true) { 
      // current   
      x[3] = x[1];

      // next 
      x[1] = x[2];

      // next after next  
      x[2] = x[3] + x[1];
      
      yield x[3];
    }
  }

const f = (number) => {
    const sequence = fibonacci()
    let a = []

    while(true){
        let x = sequence.next().value
        
        if (x < number){
            a.push(x)
        }
        else {
            break
        }
    }
    return a
        .filter( i => i % 2 === 0 )
        .reduce( (sum, value) => sum + value )
}

module.exports = f;