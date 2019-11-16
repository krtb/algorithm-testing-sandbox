// Q: "Write a function called Same(), which accepts 2 arrays."
//     Function should return true IF every value in the array
//     has it's corresponding value SQUARED in the 2nd array.
//      Frequency of values must be the same

// Ex: same([1,2,3], [4,1,9]) // TRUE - order can be mixed up
//     same([1,2,3],[1,9]) // FALSE
//     same([1,2,1], [4,4,1]) // FALSE (must be the same frequency, 1 should occur twice)


function same(arr1, arr2){
    //short-circuit
    if(arr1.length !== arr2.length){
        return false;
    }

    // each obj counts frequency of individual values in arrays  
    let frequencyCounter1 = {}; 
    let frequencyCounter2 = {};

    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }

        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
}   

same([1,2,3,2], [9,1,4,4])