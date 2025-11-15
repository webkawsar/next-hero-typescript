{
    //

    interface Developer<T, X> {
        name: string,
        computer: {
            brand: string,
            model: string,
            releaseYear: number
        },
        smartWatch: T,
        bike?: X
    }

    type XMiWatch = {
        brand: string,
        model: string,
        releaseYear: number
    }

    const webDeveloper:Developer<XMiWatch, null> = {
        name: "Kawsar Ahmed",
        computer: {
            brand: "HP",
            model: "HP G6",
            releaseYear: 2020
        },
        smartWatch: {
            brand: "X-mi",
            model: "ABC",
            releaseYear: 2025
        }
    }

    // ekhnae smart watch er maje extra property ase segulo dynamically type add kore deya jachhe
    interface AppleWatch {
        brand: string,
        model: string,
        releaseYear: number,
        sleepTrack: boolean,
        bpTrack: boolean
    }

    interface YamahaBike {
        brand: string,
        model: string,
        year: number
    }

    const backendDeveloper:Developer<AppleWatch, YamahaBike> = {
        name: "Samim Ahmed",
        computer: {
            brand: "Lenovo",
            model: "Ideapad 310",
            releaseYear: 2017
        },
        smartWatch: {
            brand: "Apple Watch",
            model: "ABC",
            releaseYear: 2025,
            sleepTrack: true,
            bpTrack: true,
        },
        bike: {
            brand: "Yamaha",
            model: "G^6",
            year: 2022
        }

    }



    //
}