const yargs = require("yargs");
const { client, connection } = require("./db/connection");
const { addMovie, listMovies } = require("./utils");

const app = async (yargsObj) => {

const collection = await connection();

    try {
        if (yargsObj.add) {
            //add movie to MongoDB
          await addMovie({ title: yargsObj.title }, collection);
        } else if (yargsObj.list) {
            //list movies from MongoDB
            await listMovies(collection);
        } else {
            console.log("Incorrect command");
        }

    } catch (error){
        console.log(error);
       
    }
  await client.close();
};

app(yargs.argv);