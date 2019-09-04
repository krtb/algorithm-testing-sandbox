# Solution Steps

* Create empty array tohold chunks, called `chunked`
* For each element  in the `unchunked` array
  * retrieve the last element
    * would INTITIALLY get undefined, since new array is first empty
  * `IF` last element does not exist, or if it's length is equal to chunk size
    * Push a new chunk into `chunked` with the current element.
  * `ELSE`, add the current element into the chunk.