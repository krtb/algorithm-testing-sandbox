function countingValleys(n, s) {
    //n = number of steps in Gary's hike
    // s = string of n chracters that describe Gary's path
    let numberOfValleys = 0;
    let currentLevel = 0; // start at 0 for regulat path, -1 when in valley, +1 when climbing mountain
    let d;
    
    for(d in s){
        if(d === 'U'){
            currentLevel += 1
        } else {
            currentLevel -= 1
        }
    }
    return numberOfValleys
}