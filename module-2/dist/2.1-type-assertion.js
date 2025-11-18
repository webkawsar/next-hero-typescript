"use strict";
{
    // type assertion
    // type assertion mane developer typescript er better type buje thake
    // ami developer hisebe typescript er cheye better type bujte pari ba declare korte pari tahole setai type assertion
    let anything;
    // console.log(anything.)  // kuno kichu suggestion dey na
    anything = "Next Level Developer";
    // (anything as string).concat() // ekhon suggestion dichhe
    anything = 420;
    // (anything as number).toFixed() // number type er sokol suggestion dibe
    // tar mane ami developer jodi ekebare sure hoye jai je data type etai hobe sure etai type assertion
    const kgToGm = (value) => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value);
            return `The converted value is: ${convertedValue}`;
        }
        if (typeof value === 'number') {
            return value;
        }
    };
    const result1 = kgToGm('1000'); // here i am sure it is return a string
    const result2 = kgToGm(1000); // here i am sure it is return a number
    // try catch
    try {
        // something
    }
    catch (error) {
        // solve error handling error
        console.log(error.message);
    }
}
