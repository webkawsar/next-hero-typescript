
// Problem 1:
// Sample Input: 
// repeatString("Hello!", 3)

// Sample Output:
// "Hello!Hello!Hello!"

// way-1
// const repeatString = (text: string, count: number):string => {
//     let modifiedText = "";
//     for(let i=1; i<=count; i++) {
//         modifiedText += text;
//     }

//     return modifiedText;
// }

// way-2
function repeatString(str: string, count: number): string {
  return str.repeat(count);
}

console.log(repeatString("Hello!", 3))




// Problem 2:
// Sample Input:
// findLargestNumber([10, 5, 8, 20, 3])

// Sample Output:
// 20

// way-1
const findLargestNumber = (array: number[]):number => {
    const result = array.reduce((prev:number, current:number):number => {
        if(prev>current) {
            return prev;
        } else {
            return current
        }
    }, 0)

    return result;
}

const sampleArray: number[] = [10, 5, 8, 20, 3];
console.log(findLargestNumber(sampleArray));



// Problem 3:
// Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.
// Sample Input:
// filterEvenNumbers([1, 2, 3, 4, 5, 6])

// Sample Output:
// [2, 4, 6]

// way-1
const filterEvenNumbers = (numberArray:number[]):number[] => {
    let result:number[] = [];
    for (let i = 0; i < numberArray.length; i++) {
        const element = numberArray[i]!; // ekhane eta (!) deya mane ami confirm er value undefined hobe na
        if((element%2) === 0){
            result.push(element);
        }
    }

    return result;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));




// Problem 4:
// Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.

// Sample Input 1:
// reverseArray(["apple", "banana", "cherry"])

// Sample Output 1:
// ["cherry", "banana", "apple"]

// Sample Input 2:
// reverseArray([10, 20, 30])

// Sample Output 2: 
// [30, 20, 10]


const reverseArray = <T>(param: T[]) => {
    let result: T[] = [];
    for (const element of param) {
        result.unshift(element);
    }

    return result;
}

const result = reverseArray<string>(["apple", "banana", "cherry"]);
const result2 = reverseArray<number>([10, 20, 30]);
console.log(result) ;
console.log(result2) ;





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





// Problem 6:
// You are given an object representing a book with properties title (string), author (string), and publishedYear (number). Use type alias for declaring the object. Write a TypeScript function called isRecentBook that takes this book object as input and determines if the book was published in the last 5 years.

// Hints: Use getFullYear() method to extract the year to check the given year with current year.


// Sample Input :
// const book1: Book = {
//     title: "Sample Book",
//     author: "John Doe",
//     publishedYear: 2022
// };
// isRecentBook(book1);

// Sample Output: 
// true

type Book = {
    title: string;
    author: string;
    publishedYear: number;
}
const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022
};

const isRecentBook = (book: Book):boolean => {
    const currentYear = new Date().getFullYear();
    return book.publishedYear >= currentYear - 5;
}

console.log(isRecentBook(book1));





// Problem 7:
// Create a TypeScript function logString that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.

// Sample Input 1: 
// logString("Hello, TypeScript!");

// Sample Output 1:  
// "Hello, TypeScript!"

// Sample Input 2: 
// logString(42)

// Output: Error: 
// Input is not a string.

const logString = (param: unknown):void => {
    if(typeof param === 'string') {
        console.log(param);
    } else {
        console.log("Error: Input is not a string.");
    }
}

logString("Hello, TypeScript!");
logString(42);





// Problem 8:
// Design a TypeScript class Car that represents a basic car with properties for brand, model, and year. Implement a method displayInfo that displays information about the car.

// Sample Input:
// new Car("Toyota", "Corolla", 2020);

// Sample Output: 
// "Your car model is:  2020 Toyota Corolla"

class Car {
    constructor(public brand:string, public model:string, public year:number) {}
    public displayInfo() {
        console.log(`Your car model is: ${this.year} ${this.brand} ${this.model}`)
    }
}

const car = new Car("Toyota", "Corolla", 2020);
car.displayInfo();











// Blog Writing (anyone):
// Write an impactful blog posts covering the following topics:

// The significance of union and intersection types in Typescript.
// How to handle asynchronous operations using async/await over callback/promise TypeScript.
// Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.
// Note:You will have to choose any one blog topic


