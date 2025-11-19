{
    // conditional type
    type A = null;
    type B = undefined;
    type C = A extends null ? true : false; // conditional types
    type D = A extends number ? true : false; // conditional types
    type x = A extends null ? B extends undefined ? true : false : false; // nested conditional types


    type Sheikh = {
        car: string;
        bike: string;
        ship: string
    }

    // type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    type HasBike = CheckVehicle<"bike">;
    type HasTractor = CheckVehicle<"tractor">;
    type HasShip = CheckVehicle<"ship">;






















    //
}