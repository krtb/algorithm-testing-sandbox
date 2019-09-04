// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    //1) create new array
    const chunked = [];
    //2) iterate through original array of elements
    for (let element of array ) {
    //3) get last elememt inside our chunked array
        const last =  chunked[chunked.length - 1] //get last element
        console.log(last);
        
        if (!last || last.length === size){
            //push new chunk into chunked with current element
            chunked.push([element]) // add a new chunk, and put element inside, 2 things in one step
        } else {
            last.push(element)
        }
    }

    return chunked;
}

module.exports = chunk;
