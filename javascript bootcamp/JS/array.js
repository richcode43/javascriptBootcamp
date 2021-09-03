//array declaration
let data = [6, 10, 12, 3];

//Create a loop that runs through each item in the fruits array.
// const fruits = ["Apple", "Banana", "Orange"];
// for (x of fruits) {
//     console.log(x);
// }


//accessing the element inside the array
// console.log("First Element = " + data[0]);

//second element
// console.log("second Element = " + data[1]);

//last element
// console.log("Last Element = " + data[data.length - 1]);
// console.log(data);

//array method
//Adding elements to end of array = push()
// data.push(60);
// console.log(data);

//adding more than one element to an array
// data.push(20, 40, 37);
// console.log(data);

//add to the start of the array = unshift
// data.unshift(100, 300);
// console.log(data);

//removing from the end of array
// let item = data.pop();
// console.log(item);
// console.log(data);

//removing from the start of the array
// let itemrem = data.shift();
// data.shift();
// console.log(itemrem);
// console.log(data);

//indexof //returns index of the specified value
// let item2 = data.indexOf(3);
// console.log(item2);

//print out array of odd numbers or even numbers
// let data = [6, 10, 12, 3];

function evenNo(arr) {
    let even = [];
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if (arr[i] % 2 == 0) {
            even.push(arr[i]);
        }
    }
    return even;
}
// console.log(evenNo(data));

//includes //boolean
let k = data.includes(3)
    // console.log(k);

//sorting array. //Ascending order
newArray = [45, 2, 4, 5, 7, 3];
// newArray.sort();
// data.sort(); 
// console.log(newArray);


k = [2, 4, 6, 2, 3, 3, 7] //remove duplicate

// console.log(new Set([...k]));

//function remove duplicate
// function removeDupl(arr) {
//     newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (newArr.includes(arr[i])) {
//             continue;
//         } else {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(removeDupl(k));

//given an array of numbers some have been given in number form and some in string form
//if it is number form add it to be total
//if it is in string form convert it to a number and multiply the total
//example: [1,2,"3",4,"5","6","9",10]
//total =1+2+4+7+10 // numbers
//total = 3*5*6*9

function addAndMultiply(arr) {
    let total = 0; //initialize
    //loop through array
    for (i = 0; i < arr.length; i++) {
        let val = [i];
        // console.log(val + " => " + typeof(val));
        if (typeof(val) === "number") {
            total += val;
        } else {
            total *= val;
        }
    }
    return total;
}
// console.log(addAndMultiply([1, 2, "3"]));

//splice //js function // used to add or remove array element
//splice overrides original array

//syntax
// arryName.splice(index, nof, items1, items2....itemN)
//index =>position to add/remove items
//nof =>optional.NUmber of item to be removed from the array
//items1 =>new items tobe added

// const animal = ["dog", "goat", "cat", "lion"];
// animal.splice(2, 2, "snake", "deer");
// animal.splice(2, 1);
// animal.splice(5, 0, "python"); //would add only python to the array
// console.log(animal);

//slice;  //specifies an index position from where to start and end printing

const letter = ["A", "B", "C", "D", "E", "F"];
let newL = letter.slice(1, 4);
// console.log(newL);
// console.log(letter.reverse().join(""));

//forEach(): used to execute a function on eachitem in an array

const companies = ["Apple", "Google", "Facebook", "Twitter", "TikTok"];
//traditional  loop
// for (i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
//     console.log(i + ".)" + companies[i]);
// }

// companies.forEach(con => {
//     console.log(con);
// })

// function getindexandValue(company, count) {
//     console.log(i + ".)" + companies[i]);
// }
// companies.forEach(getindexandValue);

// companies.forEach(con, i => {
//     console.log(`${i}: ${con}`);
// })

//Reapeat() //array method
// let word = "Bolanle";
// console.log(word.repeat(5));


//other array functions
const cities = [
    { name: "Rivers", population: 6000000 },
    { name: "Edo", population: 2600000 },
    { name: "Bayelsea", population: 6000000 },
    { name: "Imo", population: 3600000 },
    { name: "lagos", population: 20000000 }

]
let bigcities = [];
let smallerCities = [];
for (let i = 0; i < cities.length; i++) {
    //console.log(cities[i].name); //prints only cities names
    //console.log(cities[i].population); //prints only cities population

    //display only cities with population of 20000 or more and display the result in array
    // if (cities[i].population >= 20000000) {
    //     console.log(cities[i]);
    //     bigcities.push(cities[i]);
    // }

}
// console.log(bigcities);
//displaycities with populationbelow 10,000,000
// if (cities[i].population <= 10000000) {
//     smallerCities.push(cities[i]);
// }
// console.log(smallerCities);

//filter method //
const bigCi = cities.filter((item) => {
    return item.population >= 20000000
});
// console.log(bigCi);

//smaller population
// const smallCi = cities.filter((smac) => {
//     return smac.population <= 10000000
// });
// console.log(smallCi);

//display cities that start with R
// const citiInt = cities.filter((cits) => {
//     cits.name.startswith("R");
// });
// console.log(citiInt);


const students = [

    ['Miracle', 36, 'Physics', 3],
    ['Confidence', 17, 'Physics', 3],
    ['Loveth', 28, 'Physics', 3],
    ['Richmond', 45, 'Physics', 3],
    ["King", 48, 'Physics', 3],
    ['Everest', 20, 'Physics', 3],
    ['cruz', 30, 'Physics', 3],
    ['Favour', 26, 'Physics', 3],
    ['Uche', 40, 'Physics', 3],
    ['Chidi', 23, 'Physics', 3],
    ['Gift', 34, 'Physics', 3],
    ['Vanessa', 15, 'Physics', 3],
    ['Solomon', 42, 'Physics', 3],
    ['Pablo', 47, 'Physics', 3],
    ['Sean', 19, 'Physics', 3],
    ['Collins', 35, 'Physics', 3],
    ['Samuel', 43, 'Physics', 3],
    ['Mckenzie', 24, 'Physics', 3],
    ['Wisdom', 37, 'Physics', 3]
]

//QUESTIONS
// 1. Calculate the average score for each student(1st,2nd & 3rd position)

/*
2. Calculate the percentage of each student score.If any student score is about 75 % recommenrd the student 
for a government scholarship*/

//3. ELSE If any student score is below 40 % ask the student to REPEAT the class.


//SOUTION

//TOTAL SCORE = 50;


// console.table(students[5]);
// for (let i = 0; i <= students.length; i++) {
//     console.log(i);
//     for (j = 0; j < 10; j++) {
//         console.log();
//     }
// }

//2. formula for percentage =(score/50)*100)
students.forEach(score => {
        let percentage = ((score[1] / 50) * 100).toFixed();
        score.splice(4, 0, percentage + "%")


        if (percentage > 40 || percentage >= 75) {
            console.log("congratulations")
            score.splice(5, 0, "congrats");


        } else if (percentage <= 40) {
            score.splice(5, 0, "REPEAT CLASS")
        }
    })
    // console.log(students)


// function evenNo(arr) {
//     let even = [];
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
// if (arr[i] % 2 == 0) {
//     even.push(arr[i]);
// }
//     }
//     return even;
// }
// console.log(evenNo(data));