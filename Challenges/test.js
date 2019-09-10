var myArray = ["student", 'car', 'car']

function maxChar(myArray) {
    //empty object will hold our data
    const charMap = {};
    let max = 0;
    let maxChar = '';

    //FOR-OF, iterating through any iterable object. Array, string, etc.
    for (let char of myArray) {
        if (!charMap[char]) {
            charMap[char] = 1
        } else {
            charMap[char]++
        }
    }
    //console.log(charMap)

    //FOR-IN for objects
    for (let char in charMap) {
        if (charMap[char] > max) {
            // if element greater than this character, new max value
            max = charMap[char]
            maxChar = char //char is diff letters added to object
        }
    }
    console.log(maxChar);
    
}

maxChar(myArray)
