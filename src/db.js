import mongoose from "mongoose";
import config from "./config";

(async () => {
    try{
        const db = await mongoose.connect(config.mongodbURL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        });
        console.log("Database is connected to: ", db.connection.name);
    }catch(err){
        console.error(err);
    } 
})();
