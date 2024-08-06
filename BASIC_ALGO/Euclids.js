// Basic Euclidean Algorithm
function gcd(a, b) {
    if (a === 0) return b;
    return gcd(b % a, a);
}

// Check if two numbers are coprime
function areCoprime(a, b) {
    return gcd(a, b) === 1;
}

// Example usage:
const num1 = 8;
const num2 = 12;

if (areCoprime(num1, num2)) {
    console.log(`${num1} and ${num2} = ${gcd(num1, num2)} are coprime.`);
} else {
    console.log(`${num1} and ${num2} = ${gcd(num1, num2)} are not coprime.`);
}
