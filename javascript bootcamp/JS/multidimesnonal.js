const students = [

    ['Miracle', 36, 'Physics', 3],
    ['Confidence', 17, 'Physics', 3],
    ['Loveth', 28, 'Physics', 3],
    ['Richmond', 45, 'Physics', 3],
    ["King", 30, 'Physics', 3],
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
    ['Wisdom', 50, 'Physics', 3]
]

//QUESTIONS
// 1. Calculate the average score for each student(1st,2nd & 3rd position)
for (let a = 0; a < students.length; a++) {
    // console.log(students[a]);
    let innerLoop = students[a].length;

    for (let b = 0; b < innerLoop; b++) {
        // let check = prompt("Enter score")
        // if (prompt)
        if (students[a][1] == 50) {
            console.log("Congratulations" + " " + students[a][0] + " " + "You came 1ST Position");
        } else
        if (students[a][1] == 45) {
            console.log("Congratulations" + " " + students[a][0] + " " + "You came 2ND Position");
        } else if (students[a][1] == 40) {
            console.log("Congratulations" + " " + students[a][0] + " " + "You came 3RD Position");

        }
    }
}

/*
2. Calculate the percentage of each student score.If any student score is about 75 % recommenrd the student 
for a government scholarship*/

//3. ELSE If any student score is below 40 % ask the student to REPEAT the class.


//SOUTION

//TOTAL SCORE = 50;


// console.log(students[0][1]);
for (let i = 0; i <= students.length; i++) {
    // console.log(students[1]);
    // let innerLoopLength = student[i].length;
    // console.log(innerLoopLength)
    // for (j = 0; j < innerLoopLength; j++) {
    //     // console.log();

    // }
}

//2. formula for percentage =(score/50)*100)
students.forEach(score => {
        let percentage = ((score[1] / 50) * 100).toFixed();
        score.splice(4, 0, percentage + "%")


        if (percentage > 40 || percentage >= 75) {
            // console.log("congratulations")
            score.splice(5, 0, "CONGRATULATIONS");


        } else
        if (percentage <= 40) {
            score.splice(5, 0, "CLASS REPEAT")
        }
    })
    // console.table(students)