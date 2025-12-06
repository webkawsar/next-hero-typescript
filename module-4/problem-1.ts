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
