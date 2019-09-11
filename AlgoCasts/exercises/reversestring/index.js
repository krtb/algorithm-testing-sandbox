// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
// - method that belongs to all arrays, but pass in a string

//STEPS
// - turn str into array
// - call REVERSE method on array
// - JOIN array back to string
// - return RESULT

let str = 'coolbeans'

//TODO: SOLUTION 1
// function reverseString(str) {
//     const arr = str.split('') // convert STR to ARRAY of CHARS
//     //console.log(arr) 
//     let reversedStr = arr.reverse() // method that reverses CHARS in ARR
//     //console.log(reversedStr);
//     let joinedStr = reversedStr.join('') // turn ARR into str
//     //console.log(joinedStr);
//     return joinedStr
// }

// TODO: CLEAN SOLUTION 1
// function reverseString(str) {
//     console.log(str.split('').reverse().join(''));
// }

//STEPS
// - create an empty string called 'reversed'
// - for each CHAR in STR
//   - take string and add to start of reversed
// - RETURN the VAR reversed

//TODO: SOLUTION 2
// function reverseString(str){
//     let reversed = ''; // setup var to hold string

//     //IF looping over every 2nd element in array, use WHILE loop/ classic FOR 

//     for(let char of str){
//         reversed = char + reversed //adding each CHAR to START of string reversed
//     }

//     console.log(reversed);
//     //return reversed
// }

//TODO: SOLUTION 3, uses array helper
function reverseString(str) {
    // takes all different values within an array, REDUCES to one singular value
    // FIRST ARG = arrow function
    // SECOND ARG = starting initial VAL for our FUNC
    let myAnswer = str.split('').reduce((reversed_string, character)=>{
        return character + reversed_string
    }, '');
    // - take starting arg
    // - pass into arrow func as first arg
    // - what gets returned will be used as starting point for each successive function
    console.log(myAnswer);
}

reverseString(str)