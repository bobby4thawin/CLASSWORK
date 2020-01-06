//Passenger Plane Selection 

let availablePassengerPlanes = ["Boeing 747", "Boeing 737", "Battle Bus", "Venator Class Star destroyer"];
let maxPlanePassengersPerFlight = [416, 215, 100, 2000];
let costPerPlanePassenger = [150, 120, 9.50, 50000];

for (let i = 0; i < availablePassengerPlanes.length; i++) {
    let totalPlaneIncome = maxPlanePassengersPerFlight[i] * costPerPlanePassenger[i]
    console.log("If we used the passenger planes", availablePassengerPlanes, "and filled them completely with passengers then charged them the minimum required to make a profit we would earn ", totalPlaneIncome.toFixed(2));
}

// Helicopter Selection 

let availableHelicopters = ["Chinook", "Huey", "Black Hawk"];
let maxHelicopterPassengersPerflight = [30, 10, 12];
let costPerHelicopterPassenger = [80, 100, 125];

for (let i = 0; i < availableHelicopters.length; i++) {
    let totalHelicopterIncome = maxHelicopterPassengersPerflight[i] * costPerHelicopterPassenger[i]
    console.log("If we used the helicopters", availableHelicopters, "and filled them completely with passengers then charged them the minimum required to make a profit we would earn ", totalHelicopterIncome.toFixed(2));
}