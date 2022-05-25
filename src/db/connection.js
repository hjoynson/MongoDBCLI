require("dotenv").config();

const { MongoClient } =  require("mongodb")

const client = new MongoClient(process.env.MONGO_URL);

const connection = async () => {
    try {
        await client.connect();

//stores data

        const db = client.db("Movies");
        return db.collection("Movie");

     } catch (error) {

            console.log(error);
        }
    };

//exporting an object that contains both of them

//importing both items, client and connection

    // module.exports = {client, connection};

module.exports = {client, connection};
