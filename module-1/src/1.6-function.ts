// function
// normal function
// arrow function

function calculate(num1: number, num2: number = 125): number {
  return num1 + num2;
}

console.log(calculate(10, 15));

const calMoney = (num1:number = 70, num2:number): number => num1 + num2;



// Object --> function --> method
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};


// arrow function
const odd = [1, 9, 3, 7, 11];
const evenNumbers = odd.map((element: number):number => element * element);

// callback function

