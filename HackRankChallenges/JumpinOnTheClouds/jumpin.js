var c = [0, 1, 0, 0, 0, 1, 0]

function jumpingOnClouds(c) {
    let count = 1; // count min number of jumps
    let i = 0; // start of count for while loop

    //while loop to iterate through array of clouds
    // easier to add by 1 than with a for loop
    while(true){
        if( i + 2 < c.length && c[i+2] == 0){
            // check if 2 positions away or 0 
            i += 2
        } else if (i + 1 < c.length) {
            //check that 2 positions away in array exists
            //if any positions in array left to check
            // if so, increment i by 1 to move to next cloud
            i++
        } else {
            break // neither satisfied, reached end of array
        }
        count++; // incremented by 1 to record that a move was made
    }
    console.log(count);
    
}

jumpingOnClouds(c)
