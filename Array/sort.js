// ascending sort
let oldArr = [12, 3, 43, 2, 34, 78, 7, 9, 4]
let length = oldArr.length
for (let i = 0; i <= length; i++) {
    for (let j = 0; j <= length - 1; j++) {
        if (oldArr[j] > oldArr[j + 1]) {
            let temp = oldArr[j];
            oldArr[j] = oldArr[j + 1]
            oldArr[j + 1] = temp
        }
    }
}
console.log(`Ascending Sort Array :${oldArr}`)

//descending sort
for (let i = 0; i <= length; i++) {
    for (let j = 0; j <= length - 1; j++) {
        if (oldArr[j] < oldArr[j + 1]) {
            let temp = oldArr[j];
            oldArr[j] = oldArr[j + 1]
            oldArr[j + 1] = temp
        }
    }
}
console.log(`Descending Sort Array :${oldArr}`)