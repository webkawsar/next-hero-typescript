
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

const filterEvenNumbers = (numberArray:number[]):number[] => {
    let result:number[] = [];
    for (let i = 0; i < numberArray.length; i++) {
        const element = numberArray[i]!;
        if(element%2 === 0){
            result.push(element);
        }
    }

    return result;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));






