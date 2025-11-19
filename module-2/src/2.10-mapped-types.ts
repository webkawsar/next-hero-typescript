{
    // mapped types
    const arrayOfNumbers: number[] = [1, 3, 5, 9];
    const arrayOfStrings: string[] = arrayOfNumbers.map(number=> number.toString());


    type AreaNumber = {
        width: number;
        height: number;
    }

    type AreaString = {
        width: string;
        height: string
    }

    type MappedString = {
        // [key in "width" | "height"]: string; // static
        [key in keyof AreaNumber]: string;
    }

    // look up type
    type height = AreaNumber["height"];

    type MappedDynamicWithGeneric<T> = {
        [key in keyof T]: T[key];
    }

    const area: MappedDynamicWithGeneric<{width: number; height: string}> = {width: 100, height: "200"};





    //
}