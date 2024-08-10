const twoSum = (arr, goal) => {
  let indexes = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === goal) {
        indexes.push(i);
        indexes.push(j);
      }
    }
  }
  return indexes.length !== 0 ? indexes : `no value found to be add`;
};

const romanToInt = (num) => {
  const sym = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;

  for (let i = 0; i < num.length; i++) {
    const cur = sym[num[i]];
    const next = sym[num[i + 1]];

    if (cur < next) {
      result += next - cur;
      i++;
    } else {
      result += cur;
    }
  }
  return result;
};

const isPrime = (num) => {
  if (num <= 1) {
    return `${num} is neither prime or composite`;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return `${num} is not prime `;
      }
    }
    return `${num} is  prime `;
  }
};

const pineTree = (heigth) => {
  for (let i = 1; i <= heigth; i++) {
    const spaces = " ".repeat(heigth - i);
    const star = "*".repeat(2 * i - 1);
    console.log(spaces + star);
  }
};

const isPalindrome = (str) => {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  for (let i = 0; i < cleanedStr.length / 2; i++) {
    if (cleanedStr[i] !== cleanedStr[cleanedStr.length - i - 1]) return false;
  }
  return true;
};

console.log(isPalindrome("mo kom"));
pineTree(5);
console.log(isPrime(29));
console.log(romanToInt("LIV"));

console.log(twoSum([1, 2, 3, 4, 5], 6));
