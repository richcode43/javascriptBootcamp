let number = prompt("enter number of bunnies")

function bunnyEars(numberofBunnies) {
    const eachBunnyEars = 2;
    let totalBunnyEars = numberofBunnies * eachBunnyEars;

    return totalBunnyEars
}
console.log(bunnyEars(number));