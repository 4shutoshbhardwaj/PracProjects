import express from "express";
import { getAll,addCar,carRent,deleteCar,getCar,updateCar } from "../controller/route-controller.js";

const router=express.Router();

router.get("/",getAll);

router.post("/add",addCar);

router.put("/rent/:id",carRent);

router.delete("/delete/:id",deleteCar);

router.get("/:id",getCar);

router.put("/:id",updateCar);

export default router;