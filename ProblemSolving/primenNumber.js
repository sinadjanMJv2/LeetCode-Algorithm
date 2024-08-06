function isPrimeForLoop(number) {
    if (number === 1) {
        return '1 is neither prime nor composite.';
    } else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return `${number} is not a prime number.`;
            }
        }
        return `${number} is a prime number.`;
    } else {
        return 'The number is not a prime number.';
    }
}

// Example usage:

console.log(isPrimeForLoop(11));
