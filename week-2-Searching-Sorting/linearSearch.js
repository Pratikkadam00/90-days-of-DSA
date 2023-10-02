function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target element if found
        }
    }
    return -1; // Return -1 to indicate that the target element was not found in the array
}

// Example usage
let array = [2, 5, 1, 9, 7, 3, 6];
let targetElement = 7;
let result = linearSearch(array, targetElement);

if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log(`Element not found in the array.`);
}

// Start from the first element of the array.
// Compare the target element with the current element.
// If they are equal, the search is successful.
// If they are not equal, move to the next element in the array and repeat step 2.
// Continue this process until a match is found or the end of the array is reached.