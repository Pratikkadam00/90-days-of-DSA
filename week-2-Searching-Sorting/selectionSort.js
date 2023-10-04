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
