// create an array witht the names of six cities
// create an array with six different weather temperatues and integers 

var cities = ['Providence', 'New York City', 'Boston', 'San Francisco', 'Warwick', 'Pawtuckett',];
var temperatures = [35, 31, 34, 69, 35, 34];

for (var i = 0; i < temperatures.length; i++ ) {
    console.log("The temperature in", cities[i], "is", temperatures[i], "degrees.")
}
// Incorrect Way 
// console.log("The temperature in", cities, 'is', temperatures);