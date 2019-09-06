//Create a stack
let Stack = function(){
    this.count = 0; // keeps track of items in stack
    this.storage = {}; //empty object

    //Adds a value onto the END of the stack
    this.push = function(value){
        this.storage[this.count] = value; // going to put the value at the INDEX of the count, starts at 0
        this.count++;  // inctease the count
    }

    //REMOVE and return value at the end of the stack
    this.pop = function() {
        // if nothing in stack, return undefined
        if(this.count === 0){
            return undefined; //breaks from code
        }

        this.count--; // want to decrement count, because popping off  
        let result = this.storage[this.count];
        delete this.storage[this.count]; // delete: removes prop from object
        return result; // result that we stores before deleting
    }

    this.size = function(){
        return this.count; // number of items in the stack
    }

    // returns value at the end of the stack
    // does not remove the item  
    this.peek = function(){
        return this.storage[this.count-1]
    }
}

var myStack = new Stack(); 

myStack.push(1);
myStack.push(2);
console.log(myStack.peek()); // 2
console.log(myStack.pop()); // 2
console.log(myStack.peek()); // 1