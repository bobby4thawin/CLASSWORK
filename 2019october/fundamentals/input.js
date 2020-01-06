var readLine = require('readline');

var rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Select A Car Number and Length of days: ", function(answer) {
    var answers = answer.trim().split(",");

    // console.log(answers);

    console.log("You selected car number", answers[0].trim());
    console.log("You are renting for", answers[1].trim(), "days")
    rl.close();
});