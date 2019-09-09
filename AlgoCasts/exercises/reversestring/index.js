// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// TODO: SOLUTION #2
function reverse(str) {
    // create a variable, ONLY USE LET AND CONST! 
    // set it equal to an empty string
    let reversed = ''

    // create a for loop, DONT USE CLASSIC SYNTAX! (If you do have to iterate through every 3rd or 2nd char, the use classic OR WHILE LOOP)
    // for, a variable declaration(that will be redeclared every loop), 
    // of, the iterable object that we want to iterate through
    for (let character of str) {
        // everytime we loop, will be adding it on the the empty string, initially
        reversed = character + reversed;
    } 
    return reversed
}

// to use debugger have to call the function
reverse('asdf');

module.exports = reverse;

// TODO: SOLUTION #1
// function reverse(str) {
//     // split function takes characters and turns into an array,
//     // can add in a character to ad in characters in between
//     var myString = str.split("")

//     // reverse function will reverse elements in an array
//     myString.reverse()

//     // join function will turn an array back into a string
//     return myString.join("")
// }



// // TODO: SOLUTION #3
// function reversed(str) {
//     // turn the string into an array by calling the split function on it
//     // reduce function, takes 2 seperate values, an arrow function and an initial value

//     debugger;
//     str.split('').reduce((rev, char) =>
//         // when reduce runsm takes the starting arg of empty string
//         // passes it into the empty brackets of the arrow function
//         // what is them returned from the inner function, will be passed in on every iteration
//         // 'reversed' will be the reversed string, character will represent the new character being passed in
//         char + rev
//         // this will yield a reversed string, result of 'str' that was passed in
//         , '');
// }