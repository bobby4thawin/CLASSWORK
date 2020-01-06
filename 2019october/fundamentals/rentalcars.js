var readLine = require('readline');

var availableCars = ["Honda Civic", "Nissan Maxima", "Chevy Camaro", "Ford mustang", "Mercedes S Class"];
var rentedCars = [];
var carRentalPrice = [30, 40, 90, 90, 110];

console.log("Welcome to JavaScript Car Rentals!\n\nAvailable Cars");

for (var i = 0; i < availableCars.length; i++) {
    console.log("  ", i+1+".", availableCars[i]);
}

var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Select A Car and Length of Days: ", function(answer) {
    var answers = answer.split(",");

    var carNumber = answers[0].trim();
    var numberOfDays = parseInt(answers[1].trim());
    var carPrice = carRentalPrice[carNumber-1];
    var totalCarPrice = carPrice*numberOfDays;
    var tax = 0.07*carPrice*numberOfDays;
    var totalTax = tax.toFixed(2); 
    totalTax = parseInt(tax)
    var cost = totalTax + totalCarPrice;
    var totalCost = cost;

    console.log("You selected the", availableCars[carNumber-1]);
    console.log("This car rents for", "$"+carPrice, "per day");
    console.log("You are renting for", numberOfDays, "days");
    console.log("The total tax is", "$"+totalTax);
    console.log("The total cost is", "$"+totalCost);
    
    rl.close();
})