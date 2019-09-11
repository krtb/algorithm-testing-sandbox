// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//TODO: NOTES
// - common question forms
//    - what is the most common character in the string?
//    - Does string A have the same characters as string B? (ANAGRAM)
//    - Does the repeated string have any common characters in it?

let str = "asdfijerllllllllasdfjkjweweadascawdc"

function maxChar(str) {
    //empty object will hold our data
    const charMap = {};
    let max = 0;
    let maxChar = '';

    // for(let char of str){
    //     if (!charMap[char]) {// check VALUE of key
    //         charMap[char] = 1 // if none, set first key to have property of 1
    //     } else {
    //         charMap[char]++ // keep adding onto value of key
    //     }
    // }

    //CLEAN VERSION
    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    // //FOR-IN for objects
    // for(let char in charMap) {
    //     if(charMap[char] > max){
    //         // if element greater than this character, new max value
    //         max = charMap[char]
    //         maxChar = char //char is diff letters added to object
    //     }
    // }
    // return maxChar;

    console.log(charMap)

}

maxChar(str)

module.exports = maxChar;
