//A left rotation operation = shifts each of the array's elements 1 unit to the left
let a = [1, 2, 3, 4, 5]// array
let d = 4 // digit number of rotations to left

//constraint: 1 <= d <= n (number of integers), won't rotate more times than items in array
// SPLICE = add/remove elements from the specified location of the array, RETURNS An array containing the deleted elements
// CONCAT = used to merge two or more arrays

function rotLeft(a, d) {
    console.log(a.splice(0,d)); // splice(index, how many), changes original array && RETURNS removed items
    a = a.concat(a.splice(0, d)); // add removed item 
    //console.log(a)
}

rotLeft(a, d)