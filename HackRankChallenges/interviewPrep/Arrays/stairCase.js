// n = 4
//  #
// ##
// ###
// ####


function staircase(n) {
    let myPyramid = [];
    for (let i = 1; i <= n; i++) {
        console.log("#".repeat(i).padStart(n));
    }
}