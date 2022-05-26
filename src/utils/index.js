


//add a movie to the database
exports.addMovie = async (movieObj, collection) => {
    const response = await collection.insertOne({ 
        
        title: movieObj.title,
        actor:movieObj.actor
    
    });
    if (response.acknowledged) {
      console.log("Succesfully added movie");
    } else {
      console.log("Something went wrong");
    }
  };
  
  //list movies from the database
  exports.listMovies = async (collection) => {
    const movies = await collection.find().toArray();
    console.log(movies);
  };

  //erase a movie from thr database
  exports.eraseMovie = async (movieObj, collection) => {
      console.log(A movie successfully erased!)
  }