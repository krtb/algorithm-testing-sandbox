// n = 4
//  #
// ##
// ###
// ####

// The repeat() method returns a new string with a specified number of copies of the string it was called on.
// SYNTAX:  string.repeat(count)

function staircase(n) {
    let myPyramid = [];
    for (let i = 1; i <= n; i++) {
        console.log("#".repeat(i).padStart(n));
    }
}