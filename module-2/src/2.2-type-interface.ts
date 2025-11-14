{
    // interface

    type User1 = {
        name: string,
        age: number
    }

    interface User2 {
        name: string,
        age: number
    }


    // type primitive, object e use kora jay
    // interface shudhu object e use korte hoy

    type rollNumber = number;

    // type er sathe new kuno kichu add kora
    type UserWithRole1 = User1 & {role: string}

    // interface er sathe new kichu add kora
    interface UserWithRole2 extends User2 {
        role: string
    }

    // type ke interface er sathe use kora jay
    // interface UserWithRole2 extends User1 {
    //     role: string
    // }

    const user:UserWithRole2 = {
        name: 'Kawsar Ahmed',
        age: 29,
        role: 'Admin'
    }

    // JS ---> Object, array --> object, function --> object
    type Roll1 = number[];
    interface Roll2 {
        [index:number]: number
    }

    // const userNumbers:Roll1 = [1, 3, 5];
    const userNumbers:Roll2 = [1, 3, 5];


    // function er sathe type, interface use korar system
    type Add1 = (num1:number, num2:number) => number;
    interface Add2 {
        (num1:number, num2:number): number
    }

    // const add:Add1 = (num1, num2) => num1 + num2;
    const add:Add2 = (num1, num2) => num1 + num2;


    //
}