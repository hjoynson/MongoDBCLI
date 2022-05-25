exports.addMovie = (movieObj) => {
 const response = await collection.insertOne({title: yargsObj.title});
 console.log(response);
}