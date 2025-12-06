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
