//Given a word, return the vowels and consonants in the word
// function soundGroup(arr) {

//     vowel = [];
//     consonant = [];
//     obj = {
//         vowel: vowel,
//         consonant: consonant
//     }
//     for (let i = 0; i < arr.length; i++) {
//         let sound = arr[i];

//         if (sound.includes("a")) {
//             obj.vowel.push(sound)
//         } else {
//             obj.consonant.push(sound);
//         }
//     }
//     return obj;
// }
// character = 'destination'
// console.log(soundGroup(character));
// soundGroup("richmond")

//CORRECT SOLUTION
function checksound(word) {
    // const wordarr = word.split("");
    const wordarr = Object.assign([], word); //converting string to array
    obj = {
        vowel: [],
        consonant: []
    }
    for (let i = 0; i < wordarr.length; i++) {
        var lower = wordarr[i].toLowerCase()
        if (lower == "a" || lower == "e" || lower == "i" || lower == "o" || lower == "u") {
            obj.vowel.push(lower)
        } else {
            obj.consonant.push(lower)
        }
    }
    return obj
}
console.log(checksound("DESTINation"))

// function numberGroup(arr) {
//     even = [];
//     odd = [];
//     obj = {
//         even: even,
//         odd: odd
//     }

//     for (let i = 0; i < arr.length; i++) {
//         let value = arr[i];
//         if (value % 2 === 0) {
//             obj.even.push(value);
//         } else {
//             obj.odd.push(value);
//         }
//     }
//     return obj;
// }
// ritchy = [2, 5, 76, 4, 3, 6, 3, 6];
// console.log(numberGroup(ritchy))