import mongoose from "mongoose";
import FoodTruck from "../models/foodTruck.js"

export const getFoodTrucks = async (req, res) => {
    try {
        const foodTrucks = await FoodTruck.find();
        res.status(200).json(foodTrucks);
    } catch (error) {
        res.error(404).json({ message: error.message });
    }
};

export const addFoodTruck = async (req, res) => {
    const newFoodTruck = new FoodTruck(req.body);
    try {
        await newFoodTruck.save();
        res.status(201).json(newFoodTruck);
    } catch (error) {
        res.error(409).json({ message: error.message });
    }
};

export const updateFoodTruck = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("There is no food truck with that id");
    }
    const updatedTruck = await FoodTruck.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedTruck);
};
