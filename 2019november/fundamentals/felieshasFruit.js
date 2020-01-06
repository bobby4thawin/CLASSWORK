let availableFruit = ["oranges", "apples", "bananas"];
let prices = [1.30, 2, 3];
let quanity = [5, 10, 20];

// for loop to printout each fruit, volumesold, and total amount sold

for (let i = 0; i < availableFruit.length; i++) {
    var totalPrice = prices[i] * quanity[i]
    console.log("Item:",availableFruit[i],"Volume Sold:", quanity[i],"total Amount Sold: $", totalPrice.toFixed(2));
}
