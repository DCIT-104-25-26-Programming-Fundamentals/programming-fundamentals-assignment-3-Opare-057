const readlineSync = require("readline-sync");

function printFibonacci(n) {
    if (n <= 0) {
        console.log("Error: Number of terms must be greater than 0.");
        return;
    }

    let first = 0;
    let second = 1;

    process.stdout.write("Fibonacci sequence: ");

    for (let i = 1; i <= n; i++) {
        process.stdout.write(first + " ");

        let next = first + second;
        first = second;
        second = next;
    }

    console.log();
}

function checkFibonacci(number) {
    let first = 0;
    let second = 1;

    while (first < number) {
        let next = first + second;
        first = second;
        second = next;
    }

    if (first == number) {
        console.log(number + " is a Fibonacci number.");
    } else {
        console.log(number + " is NOT a Fibonacci number.");
    }
}

function main() {
    let n = readlineSync.questionInt("How many terms? ");
    printFibonacci(n);

    let number = readlineSync.questionInt("Enter a number to check: ");
    checkFibonacci(number);
}

main();
