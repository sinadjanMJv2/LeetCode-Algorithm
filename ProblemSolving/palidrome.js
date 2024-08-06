function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Check if the cleaned string is the same when reversed
    return cleanedStr === cleanedStr.split('').reverse().join('');
}


console.log(isPalindrome("race car")); // true
console.log(isPalindrome("not a palindrome")); // false
console.log(isPalindrome("A man, a plan, a canal. Panama")); // true
console.log(isPalindrome("never odd or even")); // true
console.log(isPalindrome("nope")); // false


/// second way

const isPalindromeV2 = str => {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    for (let i = 0; i < cleanedStr.length / 2; i++)
        if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) return false;
    return true;
};

// Example usage:
console.log(isPalindromeV2("race car")); // true
console.log(isPalindromeV2("not a palindrome")); // false
console.log(isPalindromeV2("A man, a plan, a canal. Panama")); // true
console.log(isPalindromeV2("never odd or even")); // true
console.log(isPalindromeV2("nope")); // false
