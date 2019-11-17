let a = [17, 28, 30]
let b = [99, 16, 8]

function compareTriplets(a, b) {
    let aliceA = 0;
    let bobbyB = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            aliceA++
        }
        if (b[i] > a[i]) {
            bobbyB++
        }
    }
    return [aliceA, bobbyB]
}