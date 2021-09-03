let wordCheck = prompt("enter a word")

function fizzString(str) {
    if (str.startsWith("f") && str.endsWith("b")) {
        return 'fizzbuzz';
    } else if (str.startsWith("f")) {
        return 'fizz';
    } else if (str.endsWith("b")) {
        return 'buzz';
    } else {
        return wordCheck;
    }

}
console.log(fizzString(wordCheck));
// console.log(fizzString("dib"));
// console.log(fizzString("fib"));