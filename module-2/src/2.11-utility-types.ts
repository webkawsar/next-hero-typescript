{
    // Utility types

    type Person = {
        id: number;
        name: string,
        age: number;
        email?:string
    }

    // pick 
    type name = Pick<Person, "name">;
    type nameAge = Pick<Person, "name" | "age">;

    // omit
    type OmitId = Omit<Person, "id">;
    type OmiInfo = Omit<Person, "age" | "name">;

    // required
    type RequiredInfo = Required<Person>;

    // partial
    type PartialInfo = Partial<Person>;

    // readonly
    const person1:Person = {
        id: 101,
        name: "Kawsar",
        age: 29
    }
    person1.name = "Samim";

    type PersonReadonly = Readonly<Person>;
    const person2:PersonReadonly = {
        id: 101,
        name: "Kawsar",
        age: 29
    }
    // person2.name = "Imran Khan";


    // record
    type InfoObj = {
        aa: string;
        bb: string;
        cc: string;
    }

    const myInfo:InfoObj = {
        aa: "AA",
        bb: "BB",
        cc: "CC",
        // dd: "DD"
    }

    // first param object er key type ki hobe, second param obj er value type ki hobe
    type RecordObj = Record<string, string>; 
    const myInfo2:RecordObj = {
        aa: "AA",
        bb: "BB",
        cc: "CC",
        dd: "DD",
        ee: "EE"
    }

    // const emptyObject: object = {};
    // emptyObject.name = "Kawsaar";

    // const emptyObject: {} = {};
    const emptyObject: Record<string, unknown> = {};

    // empty object create korte hole {} diye kora jay abar record diye o kora jay



    //
}