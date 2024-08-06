function printHollowTriangleForLoop(n) {
    for (let i = 1; i <= n; i++) {
        // Printing stars and spaces
        for (let j = 0; j < i; j++) {
            if (i === n || j === 0 || j === i - 1) {
                process.stdout.write('*');
            } else {
                process.stdout.write(' ');
            }
        }
        console.log(); // Move to the next line
    }
}

// Example usage:
printHollowTriangleForLoop(6);
