// Basic Euclidean Algorithm
const gcd = (a, b) => (a === 0 ? b : gcd(b % a, a));

// Check if two numbers are coprime
const areCoprime = (a, b) => gcd(a, b) === 1;

// Example usage:
const [num1, num2] = [8, 12];
console.log(`${num1} and ${num2} are ${areCoprime(num1, num2) ? 'coprime' : 'not coprime'}.`);
