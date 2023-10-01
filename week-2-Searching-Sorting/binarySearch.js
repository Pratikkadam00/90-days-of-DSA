function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // If the middle element is the target, return its index
        if (arr[mid] === target) {
            return mid;
        }

        // If the target is greater, ignore left half
        if (arr[mid] < target) {
            left = mid + 1;
        }
        // If the target is smaller, ignore right half
        else {
            right = mid - 1;
        }
    }

    // If the target is not found, return -1
    return -1;
}

// Example usage
let sortedArray = [2, 5, 8, 12, 16, 23, 38, 42, 56, 67];
let target = 23;
let result = binarySearch(sortedArray, target);

if (result !== -1) {
    console.log(`Element found at index ${result}`);
} else {
    console.log(`Element not found in the array`);
}

// Initialize pointers: Set two pointers, left and right, to the start and end of the sorted array, respectively.
// Midpoint calculation: Calculate the middle index of the current array segment: mid = Math.floor((left + right) / 2).
// Comparison: Compare the middle element with the target value.
// If the middle element is equal to the target, the search is successful, and the index is returned.
// If the middle element is less than the target, update the left pointer to mid + 1.
// If the middle element is greater than the target, update the right pointer to mid - 1.
// Repeat: Continue this process until the left pointer is greater than the right pointer.If the target element is not found, return -1 to indicate that the element is not in the array.