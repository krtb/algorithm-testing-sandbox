// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//TODO: NOTES
// - toString()
//    - turn numbers to strings
// - Math.sign()
//    - returns 1 if positive, -1 if negative, 0 if 0
// parseInt()
//    - converts string to number, without decimals or specical characters, also NAN if not a number
let n = -12345

// function reverseInt(n) {
//     let reversedNumber = n.toString().split('').reverse().join('')
//     let cleanNumber = parseInt(reversedNumber)

//     if(n > 0){
//         console.log(cleanNumber);
//     } else {
//         console.log(cleanNumber * -1 )
//     }

//     //console.log(cleanNumber);    
// }

//TODO: cleaner solution with Math.sign(), returns positive 1 if positive and negative -1 if negative
function reverseInt(n) {
    let reversedNumber = n.toString().split('').reverse().join('')
    let cleanNumber = parseInt(reversedNumber)

    //console.log(cleanNumber * Math.sign(n));
    return cleanNumber * Math.sign(n)
}

reverseInt(n)

module.exports = reverseInt;
