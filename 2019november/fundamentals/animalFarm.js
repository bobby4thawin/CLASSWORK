let animals = ["Chickens", "Sheep", "Pigs", "Cows"];
let profitProducedByEachAnimal = [50, 25 , 700, 1000];
let numberOfAnimals = [100, 50, 35, 500];


for (let i = 0; i < animals.length; i++) {
    let totalProfitProduced = profitProducedByEachAnimal[i] * numberOfAnimals[i]
    console.log("Our stock of ", animals[i],"produced a profit of", totalProfitProduced.toFixed(2));
}