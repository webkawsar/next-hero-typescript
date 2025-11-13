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

    const user:UserWithRole2 = {
        name: 'Kawsar Ahmed',
        age: 29,
        role: 'Admin'
    }


    //
}