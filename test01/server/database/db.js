import mongoose from "mongoose";

export const Connection=async(url)=>{
    try {
        await mongoose.connect(url,{useNewUrlParser:true});
        console.log('database connected');
    } catch (err) {
        console.log("error while connecting the database "+err);
    }
}