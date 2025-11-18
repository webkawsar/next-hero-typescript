{
    // promise
    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = "This is resolve data";
            if(data) {
                resolve(data);
            } else {
                reject("This is rejected data");
            }
        })
    }

    const showData = async () => {
        const data = await createPromise();
        console.log(data);
    }

    showData();


    // er pore fetch api call kore data niye ese dekhanu hoyese
    // api theke data asle setar type Promise<any> thake




    //
}