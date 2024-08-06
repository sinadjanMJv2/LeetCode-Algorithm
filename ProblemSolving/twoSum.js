const twoSumBruteForce = (array, goal) => {
    let indexes = [];
    
    
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === goal) {
                indexes.push(i);
                indexes.push(j);
            }
        }
    }
    return indexes.length !== 0 ? indexes : 'no value found'; 
    


};



const array = [1, 3, 10, 11, 14];
const goal = 15;
console.log(twoSumBruteForce(array, goal)); // Output: [1, 2]


// const twoSumValues = (array, goal) => {
//     const mapOfNumbers = {};
//     const twoValues = [];

//     for (let i = 0; i < array.length; i++) {
//         const complement = goal - array[i];
//         if (mapOfNumbers[complement] !== undefined) {
//             twoValues.push(array[i]);
//             twoValues.push(complement);
//         }
//         mapOfNumbers[array[i]] = true;
//     }

//     return twoValues;
// };

// // Example usage:
// const array = [1, 3, 10, 11, 14];
// const goal = 13;
// console.log(twoSumValues(array, goal)); // Output: [3, 10]
