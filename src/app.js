const yargs = require("yargs");
const { client, connection } = require("./db/connection");
const { addMovie } = require("./utils");



const app = async (yargsObj) => {

const collection = await connection();

    try {
        if (yargsObj.add) {
            //add movie to MongoDB
          await addMovie({ title: yargsObj.title });
        } else if (yargsObj.list) {
            //list movies from MongoDB
        } else {
            console.log("Incorrect command");
            client.close();
        }

    } catch (error){
        console.log(error)
       
    }
  await client.close();
};

app(yargs.argv);