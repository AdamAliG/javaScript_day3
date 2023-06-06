//ex 1 | Compare two numbers


let students = {
  "Martin": [76,64,81,57,94],
  "Thomas": [85,49,81,72,55],
  "Klaus": [65,91,84,67,85],
  "Maria": [93,70,81,64,84],
  "David": [81,99,71,100,69]
};

function calculateAverage(arr) {
  let sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
}

function determineGrade(score) {
  if (score < 60) return "F";
  if (score < 70) return "D";
  if (score < 80) return "C";
  if (score < 90) return "B";
  return "A";
}

let totalScore = 0;
let totalStudents = 0;

for (let student in students) {
  let scores = students[student];
  let avgScore = calculateAverage(scores);
  let grade = determineGrade(avgScore);
  console.log(student + ": " + grade);
  totalScore += avgScore;
  totalStudents++;
}

let classAverageScore = totalScore / totalStudents;
let classAverageGrade = determineGrade(classAverageScore);

console.log("Class average score is: " + classAverageScore.toFixed(2));
console.log("Class average grade is: " + classAverageGrade);

//ex 2 | FizzBuzz

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
  } else if (i % 3 === 0) {
      console.log('Fizz');
  } else if (i % 5 === 0) {
      console.log('Buzz');
  } else {
      console.log(i);
  }
}

//ex 3
let output = '';
for (let i = 1; i <= 6; i++) {
    output = '';
    for (let j = 1; j <= i; j++) {
        output += '*';
    }
    console.log(output);
}
