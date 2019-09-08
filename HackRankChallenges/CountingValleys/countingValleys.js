// n = steps
// s =  string to symbolize path traveresed

function countingValleys(n, s) {
  //create two values, one for altitude and one to hold count of number of valleys
    let h = 0;
    let count = 0;

    for( let i = 0; i < n; i++ ){
        //returns character at specified index
        if(s.charAt(i) === "D" && h == 0){
            count++;
            h--;
        } else if (s.charsAt(i) === "D" && h !== 0){
            h--;
        } else if (s.charAt(i) === "U") {
            h++;
        }
    }
    return count; 
}