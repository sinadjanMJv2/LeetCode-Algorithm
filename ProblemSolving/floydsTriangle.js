function printFloydsTriangle(rows) {
    let number = 1;
    for (let i = 1; i <= rows; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += number + " ";
            number++;
        }
        console.log(row);
    }
}

const numberOfRows = 10;
printFloydsTriangle(numberOfRows);
