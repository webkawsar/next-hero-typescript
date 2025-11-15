{
    // Function with Generic
    const createArray = (param: string): string[] => {
        return [param];
    }


    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    }

    const result1 = createArray("Bangladesh");
    const result2 = createArrayWithGeneric<string>("DUCSU");




    //
}