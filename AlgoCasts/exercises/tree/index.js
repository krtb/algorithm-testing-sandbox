// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each   element in the tree

class Node {
//should accept an arg that gets assigned to data prop
  constructor(data){
    this.data = data;
    this.children = []; //every node has children array, every child can have some number
  }

  //add method, from Step 1
  add(data){
     // const node= new Node(data) //create a new node that takes in data
      this.children.push(new Node(data)); //push that node to our array
  }

  //remove: need to iterate through a list of records
  remove(data){
       
  }

}
 
class Tree {}

module.exports = { Tree, Node };
