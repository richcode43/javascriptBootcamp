let programming = {
    languages: ["Javascript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your=best-programmer-joke"
};

//1. Write the command to add the language "GO" to the end  of the languages array
programming["languages"].splice(3, 0, "GO");
// console.log(programming);


//2. Change the difficulty to the value of 7
programming["difficulty"] = '7'
    // console.log(programming);

//3. Using the delete keyword, write the command to remove the jokes key from the programming object
delete programming.jokes;
// console.log(programming);

//4. Write the command to add a new key called isFun and a value of true to the programming object
programming["isFun"] = true;
// console.log(programming);

//5.Using a loop, iterates through the languages array and console.log all the languages
for (let key in programming) {
    // console.log(programming.languages);
}

//6.Using a loop, console.log all of the keys in the programming object
for (let key in programming) {
    // console.log([key]);
}

//7.Using a loop, console.log all of the values in the programming object
for (let key in programming) {
    console.log(programming[key]);
}