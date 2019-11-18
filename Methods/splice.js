// W3schools.com
var fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruitCopy = [...fruits]
fruitCopy.splice(2, 0, "Lemon", "Kiwi"); // Banana,Orange,Apple,Mango
console.log(fruitCopy, 'copy');

// DEFINITION
// - method adds/removes items to/from an array
// - returns the removed item(s)

// USAGE:  array.splice(index, howmany, item1, ....., itemX)
// - index(req) = add/remove from index. negative value for end of array
// - howmany = if 0, nothing removed. Number of items to remove
// - item1... = OPTIONAL, items to be added to array

// (==> DESTRUCTIVE <==): alters original array if no copy is made