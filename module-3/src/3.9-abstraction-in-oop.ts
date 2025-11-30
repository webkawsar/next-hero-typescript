{
    // Abstraction --> 1. interface 2. abstract
    interface Vehicle1 {
        name: string;
        model: number;
    }

    const vehicle1: Vehicle1 = {
        name: "Toyota",
        model: 2000
    }


    // interface object er sathe use kora jay
    // but class er sathe object er moto use kora jay na

    // idea
    interface Vehicle2 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // real implementation
    class Car implements Vehicle2 {
        startEngine(): void {
            console.log('I am starting the car engine')
        }

        stopEngine(): void {
            console.log('I am stopping the car engine')
        }

        move(): void {
            console.log('I am moving the car')
        }

        // esaraw onno kichu use kora jabe
        test(): void {
            console.log('This is test message')
        }
    }

    const toyotaCar = new Car();
    toyotaCar.startEngine();


    // abstract class
    // idea
    abstract class Vehicle3 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;

        // esaraw onno kichu use kora jabe
        test(): void {
            console.log('This is test message')
        }
    }

    // const hondaCar = new Vehicle3();
    // hondaCar.move();

    // abstract class theke instance create kora jay na
    // real implementation
    class Vehicle4 extends Vehicle3 {
        startEngine(): void {
            console.log('I am starting the car engine')
        }

        stopEngine(): void {
            console.log('I am stopping the car engine')
        }

        move(): void {
            console.log('I am moving the car')
        }
    }







    //
}