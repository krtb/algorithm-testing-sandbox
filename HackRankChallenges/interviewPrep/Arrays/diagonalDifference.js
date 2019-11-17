function diagonalDifference(arr) {
    let arr1 = 0;
    let arr2 = 0;
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        arr1 += arr[i][i];
        arr2 += arr[(arrLength - 1) - i][i]
    }

    let sum = Number(arr2) - Number(arr1)

    return sum
}
