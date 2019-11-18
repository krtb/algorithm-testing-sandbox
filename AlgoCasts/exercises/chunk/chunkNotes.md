# Solution Steps

* Create empty array tohold chunks, called `chunked`
* For each element in the `unchunked` array
  * retrieve the last element
    * would INTITIALLY get undefined, since new array is first empty
  * `IF` last element does not exist, or if it's length is equal to chunk size
    * Push a new chunk into `chunked` with the current element.
  * `ELSE`, add the current element into the chunk.

```js

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
```