import express from "express";
import { getAll,addCar,carRent,deleteCar } from "../controller/route-controller.js";

const router=express.Router();

router.get("/",getAll);

router.post("/add",addCar);

router.put("/rent/:id",carRent);

router.delete("/delete/:id",deleteCar);

export default router;