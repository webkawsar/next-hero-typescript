
// Type Alias

type Student = {
    fName: string,
    lName: string,
    age: number,
    profession: string,
    company: string,
    isAdmin: boolean
}

const student1:Student = {
    fName: 'Kawsar',
    lName: 'Ahmed',
    age: 29,
    profession: 'Developer',
    company: 'BPP',
    isAdmin: true,
}

const student2:Student = {
    fName: 'Samim',
    lName: 'Ahmed',
    age: 29,
    profession: 'Pilot',
    company: 'Biman Bahini',
    isAdmin: false
}

type IsAdmin = boolean;
const hasAccess:IsAdmin = true;

type Add = (num1:number, num2:number) => number

const add:Add = (num1, num2) => num1 + num2;






