{
    // Introduction to Generics
    // generics type

    // type GenericArray = Array<number>;
    // type GenericArray<param> = Array<param>;
    type GenericArray<T> = Array<T>; // industry standard


    // const rollNumbers: number[] = [1, 4,5, 9, 50];
    // const rollNumbers: Array<number> = [1, 4,5, 9, 50];
    const rollNumbers: GenericArray<number> = [1, 4,5, 9, 50];


    // const friendNames: string[] = ["Kawsar", "Samim", "Imran"];
    // const friendNames: Array<string> = ["Kawsar", "Samim", "Imran"];
    const friendNames: GenericArray<string> = ["Kawsar", "Samim", "Imran"];


    // const bollArray: boolean[] = [true, false, true];
    // const bollArray: Array<boolean> = [true, false, true];
    const bollArray: GenericArray<boolean> = [true, false, true];


    // Generic Array
    // array of object er type declare
    // const user:Array<object> = [
    //     {
    //         id: 101,
    //         name: "Kawsar"
    //     },
    //     {
    //         id: "102",
    //         name: "Samim"
    //     },
    // {
    //     role: "Admin"
    // }
    // ]

    const user:GenericArray<{id:number, name: string}> = [
        {
            id: 101,
            name: "Kawsar"
        },
        {
            id: 102,
            name: "Samim"
        }
    ]


    // Generic Tuple
    type GenericTuple<X, Y> = [X, Y];

    // const names: [string, string] = ["Kawsar", "Samim"];
    const names: GenericTuple<string, string> = ["Kawsar", "Samim"];
    const userWithId: GenericTuple<number, {name:string, age:number}> = [420, {name: "John Doe", age: 30}]



    //
}