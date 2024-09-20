// function calculateAverage(marks) {
//     let total = marks.reduce((sum, mark) => sum + mark, 0);
//     return total / marks.length;
// }

// function calculatePercentage(marks) {
//     let total = marks.reduce((sum, mark) => sum + mark, 0);
//     return (total / (marks.length * 100)) * 100;
// }

// function mainFunction() {
//     let subject1 = parseFloat(document.getElementById('subject1').value);
//     let subject2 = parseFloat(document.getElementById('subject2').value);
//     let subject3 = parseFloat(document.getElementById('subject3').value);

//     let marks = [subject1, subject2, subject3];

//     let average = calculateAverage(marks);
//     let percentage = calculatePercentage(marks);

//     document.getElementById('result').innerText = `Average: ${average.toFixed(2)}, Percentage: ${percentage.toFixed(2)}%`;
// }




// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }

// function mainFunction() {
//     let str = document.getElementById('stringInput').value;
//     let char = document.getElementById('charInput').value;

//     let index = customIndexOf(str, char);

//     document.getElementById('result').innerText = `Index of '${char}' in '${str}': ${index}`;
// }




// function removeVowels(sentence) {
//     return sentence.replace(/[aeiouAEIOU]/g, '');
// }

// function mainFunction() {
//     let sentence = document.getElementById('sentenceInput').value;
//     let result = removeVowels(sentence);
//     document.getElementById('result').innerText = `Result: ${result}`;
// }




// function isVowel(char) {
//     return 'aeiouAEIOU'.includes(char);
// }

// function countSuccessiveVowels(text) {
//     let count = 0;
//     for (let i = 0; i < text.length - 1; i++) {
//         let currentChar = text[i];
//         let nextChar = text[i + 1];
//         if (isVowel(currentChar) && isVowel(nextChar)) {
//             count++;
//         }
//     }
//     return count;
// }

// function mainFunction() {
//     let text = document.getElementById('textInput').value;
//     let result = countSuccessiveVowels(text);
//     document.getElementById('result').innerText = `Number of successive vowels: ${result}`;
// }
