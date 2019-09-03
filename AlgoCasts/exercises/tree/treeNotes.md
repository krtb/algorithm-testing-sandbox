# Tree Traversal
* iterating through a tree
* different orders to traversals

# 2 Key Methods
* Breadth-First Traversal
   * top-bottom, level wise
   * through each level of the tree
   * even if no common parent, still go LEFT TO RIGHT

* Depth-First Traversal
  * first top node, next left node, last first node. Depth of tree. GO DEEP.
  *  try to get to bottom of tree as quickly as possible

# Solution Notes
* Remove Func
  * would use `filter helper`
  * when calling filter on array, `does NOT modify original array`
  * Use cases: org chart for example, don't care about everyone on top
  * EX BELOW

```js
const arr = [1,2,3]
arr.filter(element => {
   return element === 1; 
});
```
