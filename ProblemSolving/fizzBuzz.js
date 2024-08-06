const fizzBuzz = (num) => {
  
    if(Number.isInteger(num) == true) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else if (num % 5 === 0) {
        return 'Buzz';
    } else {
        return num.toString(); // Return the number as a string
    }
}else{
return  `not an integer`
}

};

console.log(fizzBuzz(9)); // Output: FizzBuzz
