function loops() {
    // example of while loop
    let a = 20;
    let b = 10;
    while (a > 0) {
        console.log("while loop");
        a++
    }

    //example of do while loop
    let c = 20;
    do {
        console.log("do while loop");
        c++;
    } while (c < 30);

    // example of for loop
    for (let i = 0; i <= b; i++) {
        console.log("for loop");
    }

    //example of swich case
    let day = 2;
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        default:
            console.log("Invalid day");
    }

}
loops();

function conditionalSatement(){
    // example of if statement
    let x = 10;
    if (x > 5) {
        console.log("x is greater than 5");
    } else {
        console.log("x is not greater than 5");
    }

    // example of if-else statement
    let y = 15;
    if (y < 10) {
        console.log("y is less than 10");
    } else if (y < 20) {
        console.log("y is between 10 and 20");
    } else {
        console.log("y is greater than or equal to 20");
    }
}
conditionalSatement();

function operators(){
    // example of arithmetic operators
    let a = 10;
    let b = 5;
    console.log("Addition: " + (a + b));
    console.log("Subtraction: " + (a - b));
    console.log("Multiplication: " + (a * b));
    console.log("Division: " + (a / b));
    console.log("Modulus: " + (a % b));

    // example of comparison operators
    console.log("Is a equal to b? " + (a === b));
    console.log("Is a not equal to b? " + (a !== b));
    console.log("Is a greater than b? " + (a > b));
    console.log("Is a less than or equal to b? " + (a <= b));

    // example of logical operators
    let x = true;
    let y = false;
    console.log("x AND y: " + (x && y));
    console.log("x OR y: " + (x || y));
    console.log("NOT x: " + (!x));
}
let j=10;
for(i=1;i<=j;i++){
    document.writeln(i + "<br>");
    j++
}