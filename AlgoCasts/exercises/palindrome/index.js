// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

let str = "lol"

//TODO: my solution
// function palindrome(str) {
//     // return TRUE/FALSE, not a reversed string
//     // srt = "abba"
//     let turnToArray = str.split('')
//     let reverseString = turnToArray.reverse()
//     let mutateBackToString = reverseString.join("")

//     if (mutateBackToString == str){
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

//TODO: CLEANER SOLUTION 1
function palindrome(str) {
    let reversed = str.split('').reverse().join('')
    //console.log(reversed === str);
    return reversed === str
}

palindrome(str)

module.exports = palindrome;
