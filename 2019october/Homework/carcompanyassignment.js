var rentableSportsCars = ['McLaren P1', 'Lamborghini Hurican Evo Spider', 'Camaro ZL1', 'Bugatti Chiran Sport'];

var rentedSportsCars = [];

var rentPrice = [200, 300, 150, 5000];
    
for (var i = 0; i < availableSportsCars.length; i++) {
    console.log(" ", i + 1 + ".", availableSportsCars[i]);
}

var rl = readline.createInterface( {
    input: processingInstruction.stdin,
    output: process.stdout
});

rl. question("Select a car and length of days: ", function(answer) {
    
    var answers = answer.split(",");
    var SportsCarNumber = answers[0].trim();
    var numberOfDays = parseInt(answer[1].trim());
    var sportsCarPrice = rentPrice[SportsCarNumber-1];
    var totalSportsCarPrice = sportsCarPrice*numberOfDays;
    
    // Car Tax
    var tax = 0.07 * sportsCarPrice * numberOfDays;
    var taxAmount = tax.toFixed(2);
    taxAmount = parseInt(tax);
    var amount = totalTax + totalSportsCarPrice;
    var totalAmount = amount;
})













// console.log(rentableSportsCars);
// console.log(rentedSportsCars);





