function selectionSort(arr) {
    var len = arr.length;

    for (var i = 0; i < len - 1; i++) {
        // Assume the current index is the minimum
        var minIndex = i;

        // Find the minimum element in the unsorted part of the array
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
}

// Example usage
var unsortedArray = [64, 34, 25, 12, 22, 11, 90];
var sortedArray = selectionSort(unsortedArray);
console.log("Sorted array:", sortedArray);


// Find the minimum element: Iterate through the array and find the smallest element.
// Swap with the first element: Swap the found minimum element with the first element of the unsorted part.
// Move the boundary: Move the boundary between the sorted and unsorted parts one element to the right.

// In this example, the selectionSort function takes an array as input and returns the sorted array using
// the selection sort algorithm.The outer loop runs through the array, and the inner loop finds the minimum
// element in the unsorted part.After each iteration of the outer loop, the smallest element is placed in its
//  correct position.The process continues until the entire array is sorted.