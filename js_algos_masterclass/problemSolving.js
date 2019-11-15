//Q: "write a function that takes in a string, and returns count of each char in string"

//simple example
// charCount('aaaa'); // {a:4}

// - should it just return letters? Also spaces?

//complex example
// "my phone number is 1234134" //  casing, numbers, etc.?

// empty inputs
//charCount("") //what do we want to return, undefined, null?

let str = "Hello"

function charCount(str){
    //make object to return at end
    let result = {};
    //loop over string, forEach character
    for(let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase()

      //if CHAR is a number/character && is key in object, add 1 to count
        if (result[char] > 0){
        //if already a key in object
            result[char]++
        } else {
        //not already key in object
            result[char] = 1
        }

      //if CHAR is a number/letter && not in object, add it and set value to 1
      //if CHAR is something else, don't do anything
    }


    // return object at end
    console.log(result)
}

charCount(str)