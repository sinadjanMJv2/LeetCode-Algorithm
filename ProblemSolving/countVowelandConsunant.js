const countVowelsAndConsonantsForLoop = str =>{
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0;
    let consonantCount = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char.match(/[a-zA-Z]/)) {
            consonantCount++;
        }
    }

    return `vowels: ${vowelCount}, consonants: ${consonantCount} `
}



console.log(countVowelsAndConsonantsForLoop('Hello, World!'));

