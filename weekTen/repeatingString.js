const repeatingString = (s,n) => {
    let asInS = s.match(/a/g) ? s.match(/a/g).length : null;
    if(!asInS) return 0
    let remainder = n % s.length;
    let ssInN = Math.floor(n/s.length);
    let asInFloor = ssInN * asInS;
    let asInRemainder = s.slice(0,remainder).match(/a/g) ? s.slice(0,remainder).match(/a/g).length : 0;
    return asInFloor + asInRemainder
}




console.log(repeatingString('ceebbcb', 817723))