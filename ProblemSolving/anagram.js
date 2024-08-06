function areAnagramsForLoop(str1, str2) {
    const sortedStr1 = str1.replace(/\s/g, '').toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.replace(/\s/g, '').toLowerCase().split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(areAnagramsForLoop('racecar', 'arcerac')); // Output: true

