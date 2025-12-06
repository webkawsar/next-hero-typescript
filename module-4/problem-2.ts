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
