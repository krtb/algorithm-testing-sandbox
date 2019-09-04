# Notes

* can be used to solve many string related questions
* Given string
  * `will return character that occurs most often`


# Variations of this Question
* What is the most common character in a string?
* Does string A have the same characters as string B? (Anagram)
* Does the given string have any repeated characters in it?

# Solution Process
* take our string, turn into an object
* keys of object
  * chars from string
* values
  * number of times that that element has been found

# Example
* can condense if/else to ternary or boolean logic
```js
    const string = "Hello there!"
    const chars = {};

    //FOR-OF LOOP
    for (let char of string) {
        //returns refrence to particular value
        if(!chars[char]){
            //if nothing exists in object, set value to 1
            chars[char] = 1;
        } else {
            //assume already a number inside, 
            //increment by 1
            chars[char]++;
        }
    }

    chars;
```

### Alternate Version

```js
    const string = "Hello there!"
    const chars = {};

    //FOR-OF LOOP
    for (let char of string) {
        // if NULL and FALSEY, set as 1 with OR statement
        
        chars[char] = chars[char] + 1 || 1
    }

    chars;
```