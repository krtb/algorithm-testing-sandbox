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
function reverseString(str) {
    const arr = str.split('') // convert STR to ARRAY of CHARS
    //console.log(arr) 
    let reversedStr = arr.reverse() // method that reverses CHARS in ARR
    //console.log(reversedStr);
    let joinedStr = reversedStr.join('') // turn ARR into str
    //console.log(joinedStr);
    return joinedStr
}

//reverseString(str)