function findFirstNonRepeatedCharacter(str) {
    const charCount = {};

    //Count character frequencies
    for (const char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    //Find the first non-repeated character
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
}

// Example usage:
const string1 = "aabbccf";
const string2 = "abcdabcde";

console.log(findFirstNonRepeatedCharacter(string1)); // null
console.log(findFirstNonRepeatedCharacter(string2)); // "d"
