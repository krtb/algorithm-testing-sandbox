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
 
    // method to remove an element || DELETE in ES6
    this.remove = function(element) {
        if(this.has(element)){
            index = collection.indexOf(element) // find index of that element
            collection.splice(index, 1) // remove that specific element, starting at index and UP TO 1
        }
        return false // if element not in collection
    }

    //RETURN the size of the collection || PROP in ES6 set, when calling it not going to put parans after
    this.size = function() {
        return collection.length;
    }

    //------------METHODS ABOVE IN ES6 implementation of set--------------//

    //returns UNION of two sets
    // cal union on original and pass in other set
    this.union = function(otherSet) {
        let unionSet = new mySet();
        let firstSet = this.values(); // just returning the collection
        let secondSet = otherSet.values()  

        //FOR-EACH runs once for each array element.
        firstSet.forEach(function(e){
            unionSet.add(e); // to add the value
        })
        secondSet.forEach(function(e){
            unionSet.add(e); //union set won't contain duplicates
        })
        return unionSet // order doesn't matter, don't need in particular order
    }

    // this method will return the intersection of two sets as a new set
    this.intersection = function(otherSet) {
        let intersectionSet = new mySet(); // create new set
        let firstSet = this.values(); // get all values in frst set

        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e)
            };
        });
        return intersectionSet;
    };

    //this method will return the difference of two sets as a new set

    this.difference = function(otherSet) {
        let differenceSet = new mySet();
        var firstSet = this.values();

        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                difference.add(e)
            };
        });
    };
} ;
