const readlineSync = require("readline-sync");

function printTable(number) {
    console.log("Multiplication Table for " + number + ":");

    for (let i = 1; i <= 12; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}

function printTables(n) {
    for (let i = 1; i <= n; i++) {
        printTable(i);
        console.log("---------------------------");
    }
}

function main() {
    let number = readlineSync.questionInt("Enter a number: ");

    if (number <= 0) {
        console.log("Error: Please enter a positive number.");
        return;
    }

    printTable(number);

    let n = readlineSync.questionInt("Enter a number N: ");

    if (n <= 0) {
        console.log("Error: Please enter a positive number.");
        return;
    }

    printTables(n);
}

main();
