import mongoose from "mongoose";

const CONNECTION_URL = "mongodb+srv://food-truck-user-1:foodtruckuser1@sandbox.vjaej.mongodb.net/?retryWrites=true&w=majority";

const dbconnection = mongoose.connect(CONNECTION_URL);

export default dbconnection;
