
// Problem 5:
// You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.

// Hints: Use a reduce() method to sum the grades. average = total grades/ total length

// Sample Input:
// const student1: Student = {     
// name: "Bob",     
// age: 17,     
// grades: [75, 80, 82, 88, 90]
//  };

// const averageGradeForBob = calculateAverageGrade(student1);

// Sample Output:
// 83

interface Student {
    name: string,
    age: number;
    grades: number[]
}

const student1: Student = {     
    name: "Bob",     
    age: 17,     
    grades: [75, 80, 82, 88, 90]
};

const calculateAverageGrade = <T extends Student>(student: T): number => {
    // if empty case checking
    if (student.grades.length === 0) return 0;

    const totalGrades = student.grades.reduce((prev, current) => prev+current, 0);
    const average = totalGrades / student.grades.length;
    return average;
}
const averageGradeForBob = calculateAverageGrade(student1);
console.log(averageGradeForBob)
