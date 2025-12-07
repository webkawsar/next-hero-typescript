// 5-2 Insert,insertOne, find, findOne, field filtering, project



// db_name.collection_name.InsertOne({name: "Kawsar", age: 29})
// db_name.collection_name.InsertMany([
//     {name: "Samim", age: 29},
//     {name: "Imran", age: 30}
// ])


// age: 29 ase erokom ekta data asbe
// db_name.collection_name.findOne({age: 29})


// multiple data asbe
// db_name.collection_name.find({gender: "female"});


// field filtering
// kun kun property show korbe seta select kore dite parbo
// db_name.collection_name.find({gender: "female"}, {gender: 1, email: 1, phoneNumber: 1});

// evabe o field filtering kora jay
// db_name.collection_name.find({gender: "female"}).project({gender: 1, email: 1, phoneNumber: 1});

// findOne er somoy project kaj kore na. eta shudu find e kaj kore.
// tokhon evabe filtering korte hoy
// db_name.collection_name.findOne({gender: "female"}, {gender: 1, email: 1, phoneNumber: 1});















