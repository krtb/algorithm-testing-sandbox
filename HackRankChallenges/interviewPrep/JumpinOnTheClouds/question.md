# Problem
* mobile game with consecutively numbered clouds
* 2 types
  * thunder
  * regular
* can jump on any cloud equal to current (plus 1 or 2)
* avoid thunder clouds
* calculate how many jumps from start to finish
* each game starts with: ARRAY, 0 and 1
  * EX: C = [0,1,0,0,0,1,0],INDEXED: 0-6
  * number on each cloud is it's index on list
  * avoid index 1 and 5
  * answers: [0,2,4,6] || [0,2,3,4,6]
  * first path is 3 steps, second is 4

# Question
* return the minimum number of jumps required
* as integer
* c: an array of binary integers 