// let arr1 = [0, 1, 2];
// let arr2 = [3, 5, 7];
// let primes = arr1.concat(arr2);


var availableRooms = ["101", "102", "103", "104", "105"];

var bookedRooms = [];
bookedRooms = bookedRooms.concat(availableRooms.splice(1, 1));
// [ '101', '103', '104', '105' ]
bookedRooms = bookedRooms.concat(availableRooms.splice(2, 1));


console.log(availableRooms);
console.log(bookedRooms);