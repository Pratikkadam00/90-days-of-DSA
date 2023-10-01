function mergeSortedArrays(nums1, nums2) {
    let merged = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }

    // If there are remaining elements in nums1 or nums2, add them to merged
    merged = merged.concat(nums1.slice(i), nums2.slice(j));
    return merged;
}

const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
const mergedArray = mergeSortedArrays(nums1, nums2);
console.log("Merged Sorted Array: " + mergedArray); // output 1,2,3,4,5,6

// Explanation:

// mergeSortedArrays function takes two sorted arrays, nums1 and nums2.
// It uses two pointers(i for nums1 and j for nums2) to iterate through both arrays.
// It compares the elements at the pointers and adds the smaller element to the merged array.
// The pointers are then moved accordingly.
// After the loop, if there are remaining elements in either nums1 or nums2, they are added to the merged array using concat.
//     Finally, the merged array is returned.
