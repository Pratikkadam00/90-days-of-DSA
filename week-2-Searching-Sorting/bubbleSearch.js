function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            // Compare adjacent elements
            if (arr[i] > arr[i + 1]) {
                // Swap them if they are in the wrong order
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        // Optimized Bubble Sort: In each pass, the largest element will be in its correct position, so reduce the array size
        n--;
    } while (swapped);

    return arr;
}

// Example usage
let unsortedArray = [64, 34, 25, 12, 22, 11, 90];
let sortedArray = bubbleSort(unsortedArray);
console.log("Sorted array: " + sortedArray);
