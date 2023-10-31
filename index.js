prompt(`Enter a comma separated list of your favorite Froyo flavors:`);
console.log(`vanilla, vanilla, vanilla, strawberry, coffee, coffee`);

const flavors = {
    vanilla: 3,
    coffee: 2,
    strawberry: 1,
};
console.log(Object.keys(flavors));
console.log(Object.values(flavors));
