var ages = [33, 33, 26, 40];

/*function checkAdult(age) {
    return age >= 18;

} */

console.log(ages.every( age=> {
    return age >= 18;
}));
// console.log(checkAdult(ages));