/* STACKS */

// functions: 
// push = adds 1 or more items to the END of the array
// pop =  removes 1 or more items from the END of the array
// peep = 
// length = returns length of string 

var letters = []; // Here is our STACK

var word = "racecar"; 

var reversedWord = "";

//TODO: 1) place your letters into the stack
//put letters of word into stack
for(let i = 0; i < word.length; i++){
    letters.push(word[i]); //push each letter of our [word] at index [i], go through every letter
    console.log(letters)
}

//TODO: 2) pop off the stack in reverse order
for(let i = 0; i < word.length; i++){
    reversedWord += letters.pop(); //add 1 letter at the time to the new string
    // where put in order
    // will be popped off in reverse order 
    console.log(reversedWord)
}