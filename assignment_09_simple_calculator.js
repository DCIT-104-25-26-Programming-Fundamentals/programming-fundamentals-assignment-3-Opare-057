const readlineSync = require("readline-sync");

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return null;
    }

    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

function main() {
    let choice = 0;

    while (choice != 7) {
        console.log("============================");
        console.log("     SIMPLE CALCULATOR");
        console.log("============================");
        console.log("1. Addition");
        console.log("2. Subtraction");
        console.log("3. Multiplication");
        console.log("4. Division");
        console.log("5. Modulus");
        console.log("6. Exponentiation");
        console.log("7. Quit");

        choice = readlineSync.questionInt("Select an operation (1-7): ");

        if (choice == 7) {
            console.log("Goodbye!");
            break;
        }

        if (choice < 1 || choice > 7) {
            console.log("Invalid choice.");
            continue;
        }

        let num1 = readlineSync.questionFloat("Enter first number: ");
        let num2 = readlineSync.questionFloat("Enter second number: ");

        let result;

        if (choice == 1) {
            result = add(num1, num2);
            console.log("Result: " + result.toFixed(2));
        } else if (choice == 2) {
            result = subtract(num1, num2);
            console.log("Result: " + result.toFixed(2));
        } else if (choice == 3) {
            result = multiply(num1, num2);
            console.log("Result: " + result.toFixed(2));
        } else if (choice == 4) {
            result = divide(num1, num2);

            if (result == null) {
                console.log("Error: Cannot divide by zero.");
            } else {
                console.log("Result: " + result.toFixed(2));
            }
        } else if (choice == 5) {
            result = modulus(num1, num2);
            console.log("Result: " + result.toFixed(2));
        } else if (choice == 6) {
            result = power(num1, num2);
            console.log("Result: " + result.toFixed(2));
        }

        console.log();
    }
}

main();