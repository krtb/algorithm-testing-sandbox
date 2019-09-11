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
//    - returns 1 if positive, -1 if negative
// parseInt()
//    - converts string to number
let n = -12345

function reverseInt(n) {
    let stringedNumber = n.toString()
    console.log(stringedNumber);
    
}

reverseInt(n)

module.exports = reverseInt;
