function twoSum(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return null;
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log("Two Sum indices are: " + result); // output 0,1

// Explanation:

// twoSum function takes an array of numbers and a target value.
// It uses a nested loop to check all possible pairs of numbers in the array.
// If a pair is found whose sum equals the target, it returns the indices of those numbers.
// If no such pair is found, it returns null.
