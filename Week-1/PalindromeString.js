function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Compare the original string with its reverse
    return str === str.split('').reverse().join('');
}

// Example usage:
const string1 = "racecar";
const string2 = "hello";

console.log(isPalindrome(string1)); // true
console.log(isPalindrome(string2)); // false
