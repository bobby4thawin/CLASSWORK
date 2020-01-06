// working with functions
// what is a function: A subset of code that performs a specific task.
// Functions help you write "DRY" code (DON'T REPEAT YOURSELF).

// non "DRY"
console.log("We are multiplying two numbers", 5, "and", 10);
console.log(5*10);

console.log("We are multiplying two numbers", 5, "and", 10);
console.log(20*40);

console.log("We are multiplying two numbers", 5, "and", 10);
console.log(80*160);

// "DRY" with a function

function multi(f1, f2) {  // var f1 = 9, var f2 = 19
    console.log("We are multiplying two numbers", f1, "and", f2);
    console.log(f1*f2);
}

multi(9, 19);
multi(25, 50);

function checkout() {
    console.log("Thank you for visiting the Javascript Hotel! We can't wait for your RETURN.");
}

function checkin() {
    console.log("Welcome to the Javascript Hotel. A terrible nights sleep, but lots of coding!");  
}

checkout()