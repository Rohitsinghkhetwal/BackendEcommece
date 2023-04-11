import mongoose from "mongoose";

const dbConnection = () => {
    try{
        const db = mongoose.connect(process.env.MY_CONNECTION)
        if(db){
            console.log("connection established..");
        }
        


    }catch(err) {
        console.log("something went wrong...");
    }
}

export default dbConnection;