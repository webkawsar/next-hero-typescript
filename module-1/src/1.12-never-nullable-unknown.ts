
// nullable types
// unknown types
// never types


const searching = (keyword: string | null) => {
    if(keyword) {
        console.log("Searching...")
    } else {
        console.log("There is nothing to search");
    }
}

searching(null);


