// n = steps
// s =  string to symbolize path traveresed

function countingValleys(n, s) {
  //create two values, one for altitude and one to hold count of number of valleys
    let h = 0;
    let count = 0;

    // TODO: ITERATE THROUGH LIST OF STEPS THAT GARRY TOOK
    // could also use 's.length', but param given in problem
    for( let i = 0; i < n; i++ ){
        //TODO: CHECK GARY'S STEP WAS UP OR DOWN
        //returns character at specified index
        if(s.charAt(i) === "D" && h == 0){
            //TODO: IF ALT AT SEA LEVEL, AND STEP IS DOWN
            // ENTERING A VALLEY
            count++;
            h--;
        } else if (s.charsAt(i) === "D" && h !== 0){
            //TODO: CHECK IF STEP WAS DOWN AND ALT NOT AT SEA LEVEL
            h--;
        } else if (s.charAt(i) === "U") {
            //TODO: CHECK FOR A STEP UP, AND INCREMENT ALT
            // DON'T CARE HOW MANY MOUNTAINS GARY CLIMBS SO DON'T HAVE TO WORRY ABOUT (COUNT)
            h++;
        }
    }
    return count; 
}