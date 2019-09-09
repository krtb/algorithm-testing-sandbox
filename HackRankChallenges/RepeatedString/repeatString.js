let s = 'aba';
let n = 10;

function repeatedString(s, n) {
    // math.floor() = The floor() method [rounds a number DOWNWARDS to the nearest integer], and returns the result.
    let x = Math.floor(n / s.length); // 3 = number of times string occurs give (n) length
    //console.log(x)
    let count = (s.split("a").length - 1) * x; // total amount of (a's) in extended string
    //console.log(s.split("a").length - 1 ); subtract 1 to get rid of 'b' in 'aba', multiply pair by total number of times s occurs
    
    let rem = n % s.length; // remainder of letters, divide (n) length by length of string (s)
    //console.log(rem);
    
    // for loop to iterate remainder number of times over string
    for( let i = 0; i < rem; i++){
        if(s.charAt(i) === "a"){ // check to see if char at (i) is an "a"
            count ++
        }
    }
    return count;
}

repeatedString(s, n)