import mongoose from "mongoose";

const carRentalSchema=mongoose.Schema({
    carBrand:{
        type:String,
        required:true
    },
    carModel:{
        type:String,
        required:true
    },
    carNumber:{
        type:String,
        required:true
    },
    ownerName:{
        type:String,
        required:true
    },
    rented:{
        type:Boolean,
        default:false
    }
})

const car=mongoose.model("carsAvailable",carRentalSchema);

export default car;