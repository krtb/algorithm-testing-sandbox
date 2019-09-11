// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

//TODO: NOTES
// - use modulo, (%), to make sure that you're not getting a remainder
let n = 33
function fizzBuzz(n) {
    //need to iterate from 1 to n, so need to use classic for loop
    for (let i = 1; i <= n; i++ ){
        if (i % 3 === 0 && i % 5 === 0){ // is the number a multiple of 3 and 5. Could also make it 15
            console.log('fizzbuzz')
        } else if (i % 3 === 0){
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(n)

module.exports = fizzBuzz;
