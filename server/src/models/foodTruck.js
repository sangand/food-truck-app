import mongoose from "mongoose";

const FoodTruck = mongoose.model("FoodTruck", mongoose.Schema({
    name: String,
    date: Date,
}));

export default FoodTruck;