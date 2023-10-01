function maxSubarraySum(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = maxSubarraySum(arr);
console.log("Maximum Subarray Sum is: " + maxSum); //output 6

// Explanation:

// maxSubarraySum function uses Kadane's algorithm to find the maximum subarray sum.
// It initializes maxSum and currentSum with the first element of the array.
// It iterates through the array, updating currentSum to be the maximum of the current element or the sum of currentSum and the current element.
// It updates maxSum with the maximum of maxSum and currentSum in each iteration.
//     Finally, it returns the maxSum
