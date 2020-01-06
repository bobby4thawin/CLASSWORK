// create an array witht the names of six cities
// create an array with six different weather temperatues and integers 

//Temperature below 50 "Grab a coat" otherwise "A tshirt is fine"
var cities = ['Providence', 'New York City', 'Boston', 'San Francisco', 'Warwick', 'Pawtuckett',];
var temperatures = [35, 31, 34, 69, 35, 34];

for (var i = 0; i < cities.length; i++ ) {
    
    if (temperatures[i] < 50) {
     console.log("The temperature in", cities[i], "is", temperatures[i], "degrees.") 
    
    } else { console.log("The temperature in", cities[i], "is", temperatures[i], "degrees. A t-shirt is fine")

    }
}

/*if (temperatures < 50 ) {
    console.log("Grab a coat");
}

else {
    console.log("A tshirt is fine");
}
*/
 



// Incorrect Way 
// console.log("The temperature in", cities, 'is', temperatures); 
//speed trap
