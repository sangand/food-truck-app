import express from "express";
import { addFoodTruck, getFoodTrucks, updateFoodTruck } from "../controllers/food-trucks.js";

const router = express.Router();

router.get("/", getFoodTrucks);
router.post("/", addFoodTruck);
router.patch("/:id", updateFoodTruck);

export default router;
