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
