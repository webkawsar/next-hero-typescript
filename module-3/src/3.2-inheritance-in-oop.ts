{
    // OOP --> Inheritance
    class Person {
        constructor(public id: number, public name:string, public age: number, public address: string) {

        }

        getSleep(hours: number) {
            console.log(`${this.name} will sleep for ${hours}`);
        }
    }


    // student
    class Student extends Person {
        constructor(public id: number, public name:string, public age: number, public address: string) {
            super(id, name, age, address);
        }
    }

    const student = new Student(101, 'Kawsar', 29, 'Noapara');
    // console.log(student.)


    // teacher
    class Teacher extends Person {
        constructor(public id: number, public name:string, public age: number, public address: string, public profession: string) {
            super(id, name, age, address);
        }
        
        takeClass(classNo: number) {
            console.log(`Teacher will class of ${classNo}`);
        }
    }

    const teacher = new Teacher(1001, 'Samim', 29, 'Shamsernagar', 'Pilot');
    // console.log(teacher.takeClass)

    

    //
}