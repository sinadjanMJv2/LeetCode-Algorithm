const createPineTree = (height) => {
    for (let i = 1; i <= height; i++) {
        const spaces = ' '.repeat(height - i);
        const stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

createPineTree(5); 
