/*SETS*/
// USE CASE: check for presence of an item

// like array, without duplicate items  
// values not in order
// ES6 has built in SET object, BUT missing functions

function mySet(){
    let collection = []; // collection will hold the set

    // method checks for presence of element, returns true/false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1) // if falsey won't return
    }

    // method returns all values in the set
    this.values = function() {
        return collection;
    }

    // method adds element to set
    this.add = function(element) {
        if(!this.has(element)){
            // if it doesn't have the element, can add it
            collection.push(element);
            return true;
        }
        return false; 
    }
 
    // method to remove an element
    this.remove = function(element) {
        if(this.has(element)){
            index = collection.indexOf(element) // find index of that element
            collection.splice(index, 1) // remove that specific element, starting at index and UP TO 1
        }
        return false // if element not in collection
    }
}
