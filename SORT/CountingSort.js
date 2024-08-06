const countingSort = (arr) => {
    if (arr.length === 0) {
        return arr;
    }

    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const range = max - min + 1;
    const count = Array(range).fill(0);
    const output = Array(arr.length).fill(0);

    // Count occurrences of each element
    for (let i = 0; i < arr.length; i++) {
        count[arr[i] - min]++;
    }

    // Update the count array to store cumulative counts
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }

    // Copy the sorted elements back to the original array
    for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }

    return arr;
};

// Usage
const array = [4, 2, 2, 8, 3, 3, 1];
console.log("Unsorted array:", array);
const sortedArray = countingSort(array);
console.log("Sorted array:", sortedArray);
