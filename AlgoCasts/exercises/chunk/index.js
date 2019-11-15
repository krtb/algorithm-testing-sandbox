// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//TODO: NOTES
// create series of smaller array
// second number being passed in specifies how many numbers should go into each array

function chunk(array, size) {
    //1) create new array
    const chunked = [];
    console.log(!chunked)
    //2) iterate through original array of elements
    for (let element of array ) {
    //3) get last elememt inside our chunked array

        //STILL AN ARRAY BECAUSE AT NO TIME ARE YOU MUTATING THE DATA TYPE
        const last =  chunked[chunked.length - 1] // LENGTH OF THE ARRAY - 1 =  you end up on the right side
        
        //1
        if ( ! last || last.length === size){ //OR
            //push new chunk into chunked with current element
            chunked.push([element]) // add a new chunk, and put element inside, 2 things in one step
        } else {
            last.push(element)
        }
    }
    console.log(chunked)
    //return chunked;
}

chunk([1,2,3,4,5], 2)

module.exports = chunk;
