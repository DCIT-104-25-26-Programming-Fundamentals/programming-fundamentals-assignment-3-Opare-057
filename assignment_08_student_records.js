const readlineSync = require("readline-sync");

let students = [];

function addStudent() {
    let name = readlineSync.question("Student name: ");
    let id = readlineSync.questionInt("Student ID: ");

    let scores = [];
    let count = readlineSync.questionInt("How many scores? ");

    for (let i = 0; i < count; i++) {
        scores.push(readlineSync.questionInt("Enter score " + (i + 1) + ": "));
    }

    let student = {
        name: name,
        id: id,
        scores: scores
    };

    students.push(student);

    console.log('Student "' + name + '" added successfully.');
}

function getAverage(scores) {
    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum = sum + scores[i];
    }

    return sum / scores.length;
}

function displayStudents() {
    if (students.length == 0) {
        console.log("No students found.");
        return;
    }

    console.log("Name\t\tID\t\tScores\t\tAverage");

    for (let i = 0; i < students.length; i++) {
        console.log(
            students[i].name + "\t" +
            students[i].id + "\t" +
            students[i].scores.join(", ") + "\t" +
            getAverage(students[i].scores).toFixed(2)
        );
    }
}

function calculateAverage() {
    let id = readlineSync.questionInt("Enter student ID: ");

    for (let i = 0; i < students.length; i++) {
        if (students[i].id == id) {
            console.log(students[i].name + "'s average score: " + getAverage(students[i].scores).toFixed(2));
            return;
        }
    }

    console.log("Student ID not found.");
}

function main() {
    let choice = 0;

    while (choice != 4) {
        console.log("===============================");
        console.log(" STUDENT RECORD SYSTEM MENU");
        console.log("===============================");
        console.log("1. Add student");
        console.log("2. Display all students");
        console.log("3. Calculate average score");
        console.log("4. Quit");

        choice = readlineSync.questionInt("Enter your choice (1-4): ");

        if (choice == 1) {
            addStudent();
        } else if (choice == 2) {
            displayStudents();
        } else if (choice == 3) {
            calculateAverage();
        } else if (choice == 4) {
            console.log("Goodbye!");
        } else {
            console.log("Invalid choice.");
        }

        console.log();
    }
}

main();