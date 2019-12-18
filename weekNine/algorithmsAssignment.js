/*
(Easy) - Prime Number Test for any integer!

- Also do the first “n” primes - Write your Big O for both!
- We will re-visit this next week
*/

const isPrime = (n) => {
    //0(n^2) - No Bueno
    if(n < 2 ) return false
    if(n > 1 && n < 3) return true
    let limit = Math.floor(n/2 + 1)
    for(let i = 2; i <= Math.sqrt(limit); i++){
        if(n % i == 0){return false}
    }
    return true
}

const getPrimes = (n) => {
        //0(n^2) - No Bueno
    let response = []
    for(let i = 1; i <= n; i++){
        if(isPrime(i)){response.push(i)}
    }
    return response
}

const nPrimes = (n) => {
        //0(n^2) - No Bueno
    let response = []
    let i = 2;
    while(true){
        if(isPrime(i)){response.push(i)}
        if(response.length == n){break}
        i++
    }
    return response
}


/*
(Medium) - Integer to String

- Given any positive OR negative integer, returns it as a String
- NO BUILT-INs
- And obviously no JS type inferencing magic.i.E., 550 == “550"
*/

const intToString = (num) => {
    let digits = []
    while(num > 0){
        // Add right-most digit to index 0 of the digits array
        digits.splice(0,0,num%10)
        // Drop the right most digit and repeat until there are no more
        num = Math.floor(num/10)
    }
    // Add 48 to each digit and convert as ascii char code
    digits = digits.map((num) => num + 48)
    digits = digits.map((num) => String.fromCharCode(num))
    // Join and return
    return digits.join("")
}

console.log(intToString(73947583092854))




/*
 (“Hard”) - GCD - Greatest Common Divisor, can be Euclid’s Algorithm

- Given two integers, a and b, find the largest integer that divides them both (GCD).
- Euclid’s algorithm is well-known, but don’t copy - your own detriment!
- Try to solve this on your own first! Only use “hints” when you have to.
- How could you break down each number?
*/