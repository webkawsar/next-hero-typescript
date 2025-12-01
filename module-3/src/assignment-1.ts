// Problem 1:
// Sample Input: 
// repeatString("Hello!", 3)

// Sample Output:
// "Hello!Hello!Hello!"

const repeatString = (text: string, count: number) => {
    let modifiedText = "";
    for(let i=1; i<=count; i++) {
        modifiedText += text;
    }

    return modifiedText;
}

repeatString("Hello!", 3);















