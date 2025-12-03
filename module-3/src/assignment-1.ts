
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









