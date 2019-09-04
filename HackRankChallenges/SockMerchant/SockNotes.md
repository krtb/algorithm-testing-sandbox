# Steps
* Sort array
* compare each item side by side
  * find pairs that are the same
* Figure out total numbers of pairs

# Helpful Methods
* sort()
  * sort items in an array
  * order
    * alpha or numeric
    * ascending or descending
  * Best for strings
  * Problem whenc sorting numbers
    * Nums would be sorted as strings
      * Would need to add a `compare` function
* CompareFunction
  * defines an alt sort order
    * ex: 
    ```js 
    function(a,b){return a-b} 
    ```
  * After sort method compares two values, sends resilt to comparison FUNC
  * sorts according to returnd value

### Example of comparisonFunction
```js
let a = 40
let b = 100
 function(a,b){
    return a-b
 }
 //result: -60
```
* when sorting 40 and 100, sort method calls the compare func
* it computes 40-100= -60
* returns a negative number
* sort func will sort 40 as a value less than 100