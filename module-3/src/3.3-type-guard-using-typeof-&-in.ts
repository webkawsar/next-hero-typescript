{
    // tye guards
    // typeof --> type guard
    type Alphanumeric = string|number;
    
    const add = (param1: Alphanumeric, param2: Alphanumeric):Alphanumeric => {
        if(typeof param1 === 'number' && typeof param2 === "number") {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString();
        }
    }

    const result = add(2, 5);
    const result2 = add('2', '5');


    // in guard
    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: string;
    }

    const getUser = (user: NormalUser|AdminUser) => {
        if("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        } else {
            console.log(`My name is ${user.name}`);
        }
    }

    const normalUser:NormalUser = {name: "Normal Vai"};
    const adminUser:AdminUser = {name: "Admin Vai", role: "Admin"};
    const user1 = getUser(normalUser);
    const user2 = getUser(adminUser);





    //
}