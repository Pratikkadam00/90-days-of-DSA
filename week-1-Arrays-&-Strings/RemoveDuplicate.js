function removeDuplicates(sortedArray) {
    const uniqueArray = [];

    // Iterate through the sorted array
    for (let i = 0; i < sortedArray.length; i++) {
        // If the current element is different from the next element (or the last element),
        // add it to the uniqueArray
        if (sortedArray[i] !== sortedArray[i + 1]) {
            uniqueArray.push(sortedArray[i]);
        }
    }

    return uniqueArray;
}

const sortedArray = [1, 1, 2, 2, 2, 3, 4, 4, 5];

const uniqueArray = removeDuplicates(sortedArray);
console.log(uniqueArray); // [1, 2, 3, 4, 5]
