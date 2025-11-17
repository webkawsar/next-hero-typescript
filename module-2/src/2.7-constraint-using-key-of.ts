{
    // generic constraint with keyof operator
    type Vehicle ={
        bike: string;
        car: string;
        fighterJet: string
    }

    type Owner = "bike" | "car" | "fighterJet"; // manually
    type Owner2 = keyof Vehicle;

    const getPropertyValue = <X, Y extends keyof X> (obj: X, key: Y) => {
        // Y extends "id" | "name" | "email"
        return obj[key];
    }

    const user = {
        id: 101,
        name: "Kawsar",
        email: "kawsar@gmail.com"
    }

    const result = getPropertyValue(user, "name");



    //
}