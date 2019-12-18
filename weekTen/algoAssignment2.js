/*
Assignment:

Design your own class / function / etc. IE., Class called NumberSystem()
It should be able to take in a integer or string IE., 134, “F8A5”, “1011", etc.
It should convert numbers from binary to decimal, and hex to decimal.
Look up how to convert decimal into hex and decimal to binary, add that to your class / program.
*/

class NumberSystem{
    bin2dec(binNum){
        let binNumArr = binNum.split("").map((numStr)=>parseInt(numStr))
        for(let i = 0; i < binNumArr.length;i++){
            binNumArr[binNumArr.length - 1 - i] = binNumArr[binNumArr.length - 1 - i] * Math.pow(2,i)
        }
        return binNumArr.reduce((total, num)=>total+num)
        }

    hex2dec(hexNum){
        let hexNumArr = hexNum.split("")
        let digits = []
        for(let i = 0; i <= hexNumArr.length - 1;i++){
            let digit = hexNumArr[hexNumArr.length -1 - i] 
            switch(digit){
                case "A":
                    digits.splice(0,0,10 * Math.pow(16,i))
                    break;
                case "B":
                    digits.splice(0,0,11 * Math.pow(16,i))
                    break;
                case "C":
                    digits.splice(0,0,12 * Math.pow(16,i))
                    break;
                case "D":
                    digits.splice(0,0,13 * Math.pow(16,i))
                    break;
                case "E":
                    digits.splice(0,0,14 * Math.pow(16,i))
                    break;
                case "F":
                    digits.splice(0,0,15 * Math.pow(16,i))
                    break;
                default:
                    digits.splice(0,0,parseInt(digit) * Math.pow(16,i))
            }
        }
        return digits.reduce((total, num)=>total+num)
    }

    dec2bin(dec){
        return (dec >>> 0).toString(2);
    }

    hex2bin(num){
        let dec = this.hex2dec(num)
        return this.dec2bin(dec)

    }
}

var ns = new NumberSystem()
console.log(ns.hex2bin("846DA7B"))
console.log(ns.hex2dec("846DA7B"))
console.log(ns.dec2bin(1684569))
console.log(ns.bin2dec("10110001010000111010"))