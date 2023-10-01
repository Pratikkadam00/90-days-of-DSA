//reverse a string
let oldArr = [12, 3, 43, 2, 34, 78, 7, 9, 4]
let length = oldArr.length

for (let i = 0; i < Math.floor(length / 2); i++) {
    let temp = oldArr[i];
    oldArr[i] = oldArr[length - 1 - i];
    oldArr[length - 1 - i] = temp;
}

console.log(`Reverse Array : ${oldArr}`);


// ascending sort
for (let i = 0; i <= length; i++) {
    for (let j = 0; j <= length - 1; j++) {
        if (oldArr[j] > oldArr[j + 1]) {
            let temp = oldArr[j];
            oldArr[j] = oldArr[j + 1]
            oldArr[j + 1] = temp
        }
    }
}
console.log(`Ascending Sort :${oldArr}`)

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
console.log(`Descending Sort :${oldArr}`)