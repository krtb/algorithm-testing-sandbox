//Create a stack
let Stack = function(){
    this.count = 0; // keeps track of items in stack
    this.storage = {}; //empty object

    //Adds a value onto the END of the stack
    this.push = function(value){
        this.storage[this.count] = value
        this.count++;  
    }
}