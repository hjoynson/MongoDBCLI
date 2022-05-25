const yargs = require("yargs");
const { client, connection } = require("./db/connection");

const app = async (yargsObj) => {

const collection = await connection();

    try {
        if (yargsObj.add) {
            //add movie to MongoDB
          await  collection.insertOne({title: yargsObj.title});
        } else if (yargsObj.list) {
            //list movies from MongoDB
        } else {
            console.log("Incorrect command")
        }

    } catch (error){
        console.log(error)
    }

}

app(yargs.argv);