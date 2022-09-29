import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectdb from "./db/db.js";
import foodTruckRouter from "./routes/food-trucks.js";

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/food-trucks", foodTruckRouter);

app.get("/", (req, res) => {
    res.send("Welcome to food-trucks API !!!");
});

connectdb.then(() => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log("Server running on port: " + PORT);
    });
}).catch(error => {
    console.log(error.message);
});
