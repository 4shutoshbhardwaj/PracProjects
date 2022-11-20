import Car from '../model/carSchema.js';

export const getAll=async(req,res)=>{
    try {
        const cars=await Car.find({})
        res.status(200).json(cars);
    } catch (err) {
        console.log("err while getting all cars"+err);
        res.status(500).json(err.message);
    }
}

export const addCar=async(req,res)=>{
    try {
        console.log(req.body);
        const newCar=await Car.create(req.body)
        await newCar.save();
        res.status(200).json(newCar);
    } catch (err) {
        console.log("err while adding cars"+err)
        res.status(500).json(err.message);
    }
}

export const carRent=async(req,res)=>{
    try {
        console.log()
        const rented=await Car.find({_id:req.params.id})
        rented[0].rented=!rented[0].rented;
        await rented[0].save();
        res.status(200).json(rented);
    } catch (err) {
        console.log("err while adding cars"+err)
        res.status(500).json(err.message);
    }
}