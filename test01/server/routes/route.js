import express from "express";
import { getAll,addCar,carRent } from "../controller/route-controller.js";

const router=express.Router();

router.get("/",getAll);

router.post("/add",addCar);

router.put("/rent/:id",carRent);

export default router;