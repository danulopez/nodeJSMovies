const mongoose = require("mongoose");

const DB_URL= "mongodb+srv://daniela:roots@cluster0.sae7tqq.mongodb.net/moviesdb?retryWrites=true&w=majority";

const connect = async () => {
    try {
        const db = await mongoose.connect(DB_URL)
                const {name, host} = db.connection;

    console.log(`connected to ${name} DB in host: ${host}`);
    } catch (error) {
        console.log(`Error connecting to Database: ${error}`);
    }
}

module.exports = {connect}