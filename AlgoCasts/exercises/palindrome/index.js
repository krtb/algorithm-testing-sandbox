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
function palindrome(str) {
    // return TRUE/FALSE, not a reversed string
    // srt = "abba"
    let turnToArray = str.split('')
    let reverseString = turnToArray.reverse()
    let mutateBackToString = reverseString.join("")

    if (mutateBackToString == str){
        console.log(true)
    } else {
        console.log(false)
    }
}

//TODO: CLEANER SOLUTION 1
function palindrome(str) {
    let reversed = str.split('').reverse().join('')
    //console.log(reversed === str);
    return reversed === str
}

//TODO: use EVERY array method. ARRAYS, tests if every element in array pass test passed by callback func
function palindrome(str) {
    let reversed = str.split('').every((character, i)=>{
        // str.length - i, make sure that we decrement through every character in the array
        // -1, to make sure that we start at the end of the array
        return character === str[str.length - i - 1]
    })    
}


palindrome(str)

module.exports = palindrome;
