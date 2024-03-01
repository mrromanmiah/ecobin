import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB_CONNECTION_URL, {
            dbName: 'ecobin'
        });
        console.log("ecobin db connected with mongodb");
    }catch(error){
        console.log("error connecting with database of ecobin ", error);
    }
}