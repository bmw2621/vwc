const findFactors = (num) => {
    let factors = []
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            factors.push(i)
        }
    }
    return factors
}

const getTotalX = (a,b) => {
    let factors_a = []
    for(let i = 1; i <= Math.max(...b); i++){
        factors_a.push(i)
    }
    for(let i = 0; i < a.length; i++){
        factors_a = factors_a.filter(value => value % a[i] === 0)
    }

    let factors_b = findFactors(b[0])

    for(let i = 1; i < b.length; i++){
        factors_b = factors_b.filter(value => findFactors(b[i]).includes(value))
    }
    
    return factors_a.filter(value => factors_b.includes(value)).length
}

console.log(getTotalX([2,4],[16,32,96]))