/*SETS*/
// USE CASE: check for presence of an item

// like array, without duplicate items  
// values not in order
// ES6 has built in SET object, BUT missing functions

function mySet(){
    let collection = []; // collection will hold the set

    // checks for presence of element, returns true/false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1) // if falsey won't return
    }
}
