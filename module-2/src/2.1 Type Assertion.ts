{
  // 


  // type assertion
  // type assertion mane developer typescript er better type buje thake
  let anything: any;

  // console.log(anything.)  // kuno kichu suggestion dey na

  anything = "Next Level Developer";
  // (anything as string).concat() // ekhon suggestion dichhe


  anything = 420;
  // (anything as number).toFixed() // number type er sokol suggestion dibe


  const kgToGm = (value:string | number): string|number|undefined => {

    if(typeof value === 'string'){
      const convertedValue = parseFloat(value);
      return `The converted value is: ${convertedValue}`;
    }

    if(typeof value === 'number') {
      return value;
    }
      
  }

  const result1 = kgToGm('1000') as string; // here i am sure it is return a string
  const result2 = kgToGm(1000) as number; // here i am sure it is return a number


  type CustomError = {
    message: string;
  }

  // try catch
  try {

    // something
    
  } catch (error) {

    // solve error handling error
    console.log((error as CustomError).message)
  }




  // 
}
