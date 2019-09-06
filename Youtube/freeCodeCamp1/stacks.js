/* STACKS */

// functions: 
// push = adds 1 or more items to the end of the array
// pop =  removes 1 or more items from the end of the array
// peep = 
// length = returns length of string 

var letters = []; // Here is our STACK

var word = "racecar"; 

var reversedWord = "";

//put letters of word into stack
for(let i = 0; i < word.length; i++){
    letters.push(word[i]); //push each letter of our [word] at index [i], go through every letter
}