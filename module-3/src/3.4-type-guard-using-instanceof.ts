{
    // type guard --> instanceof
    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log("Animal can sound");
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }

        makeBark() {
            console.log("Dog Barking");
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }

        makeMeow() {
            console.log("Cat Meow");
        }
    }

    // class ke type hisebe lekha jay
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal: Animal) => {
        if(isDog(animal)) {
            animal.makeBark();
        } else if(isCat(animal)) {
            animal.makeMeow();
        } else {
            animal.makeSound();
        }
    }

    const dog = new Dog("Kutta", "dog");
    const cat = new Cat("Billu", "cat");
    // dog.makeSound
    // cat.makeMeow

    getAnimal(dog);





    //
}