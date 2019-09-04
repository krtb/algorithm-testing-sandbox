let sampleArray = [10, 20, 20, 10, 10, 30, 50, 10, 20]

function sockMerchant(n, ar) {
    //makes sure elements sorted in ASCENDING order
    let holdSortedSocks = arr.sort((a, b) => a - b);
    //variable would hold final count of amount of pairs, starts at 0
    let pairs = 0;

    //since comparing items side by side, make a full stop at last index
    for( let i = 0; i < n - 1; ++1 ){
        if (holdSortedSocks[i] === holdSortedSocks[i] + 1 ){
            pairs++ //increment the pairs value if we find a match
        }
    }
}