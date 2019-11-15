//Q: "write a function that takes in a string, and returns count of each char in string"

//simple example
// charCount('aaaa'); // {a:4}

// - should it just return letters? Also spaces?

//complex example
// "my phone number is 1234134" //  casing, numbers, etc.?

// empty inputs
//charCount("") //what do we want to return, undefined, null?

let str = "Hello"

// function charCount(str){
//     //make object to return at end
//     let result = {};
//     //loop over string, forEach character
//     for(let i = 0; i < str.length; i++){
//         let char = str[i].toLowerCase()

//         if (result[char] > 0){
//         //if CHAR is a number/character && is key in object, add 1 to count
//         //if already a key in object
//             result[char]++
//         } else {
//         //if CHAR is a number/letter && not in object, add it and set value to 1
//         //not already key in object
//             result[char] = 1
//         }

//       //if CHAR is something else, don't do anything
//     }


//     // return object at end
//     console.log(result)
// }

// charCount(str)

// --------- REFACTOR 1 --------- //

// 1 - sanitize data to be alphanumeric

// function charCount(str) {
//     let obj = {};

//     for(let i = 0; i < str.length; i++){
//         let char = str[i].toLowerCase()

//         if(/[a-z0-9]/.test(char)){
//             // sanitize data to only include ALPHA-NUMERIC
//             //.test() method = tests for a match in a string
//             if(obj[char] > 0){
//                 obj[char]++
//             } else {
//                 obj[char] = 1
//             }
//         }

//     }
//     console.log(obj)
// }


//------- REFACTOR 2 -----------//

// 1 - for loop first creates variable for number, THEN loops
//   - easier to use FOR OF loop

function charCount(str) {
    let obj = {};

    for(let char of str) {
        char = char.toLowerCase()

        if (/[a-z0-9]/.test(char)) {
            // sanitize data to only include ALPHA-NUMERIC
            //.test() method = tests for a match in a string
            
            //if truthy, add 1, else set value to 1
            obj[char] = ++obj[char] || 1;
        }

    }
    console.log(obj)
}

// ---------- REFACTOR 3 --------- //

function isAlphaNumeric(char){
    let code = char.charCodeAt(0)

    if(!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123) // lower alpha (a-z)
    ){
        return false
    }
    return true
}

charCount(str)
