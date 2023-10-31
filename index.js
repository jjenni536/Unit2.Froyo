// create prompt for user to input flavors and log
 prompt(`Enter a comma separated list of your favorite Froyo flavors:`);
 
// define constant for user input string and log
const userInput = `vanilla,vanilla,vanilla,strawberry,coffee,coffee`;
console.log(userInput);

// split user input into an array of strings and log
const userInputArr = userInput.split(",");
console.log(userInputArr);

// //create an object containing different flavor options and log
const flavorsOrdered = {
    vanilla: 3,
    coffee: 2,
    strawberry: 1,
};
console.log(flavorsOrdered);
// iterate through EACH flavor
// for(i = 0; i < flavorsOrdered.length; i++) {
//     console.log(flavorsOrdered[i])

    flavorsOrdered.forEach((Object.keys) => 
    console.log(Object.values));
    


// // log and observe flavors keys and corresponding values
// // for accuracy. 
// console.log(Object.keys(flavors));
// console.log(Object.values(flavors));