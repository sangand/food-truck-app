import React, { useEffect, useState } from "react";
import { createFoodTruck, updateFoodTruck } from "../../api.js";
import "./FoodTruckForm.styles.css";

const FoodTruckForm = ({ data, isEdit, onSubmit, onClear }) => {
    const [truckData, setTruckData] = useState(data);

    useEffect(() => {
        setTruckData(data);
    }, [data]);

    const clear = () => {
        setTruckData({ name: "", date: "" });
        onClear();
    };

    const onFormSubmit = () => {
        if (isEdit) updateFoodTruck(truckData).then(onSubmit);
        else createFoodTruck(truckData).then(onSubmit);
    };

    return (
        <div className="food-truck-form">
            <div className="form-title">{`${isEdit ? "Update" : "Create"} food truck`}</div>
            <div className="form-field">
                <div className="form-field-label">Truck name:</div>
                <input 
                    type="text" 
                    placeholder="Enter truck name" 
                    value={truckData.name} 
                    onChange={e => setTruckData({ ...truckData, name: e.target.value })} 
                />
            </div>
            <div className="form-field">
                <div className="form-field-label">Truck date (YYYY-MM-DD):</div>
                <input 
                    type="text" 
                    placeholder="YYYY-MM-DD" 
                    value={truckData.date} 
                    onChange={e => setTruckData({ ...truckData, date: e.target.value })}
                />
            </div>
            <div className="footer">
                <button onClick={onFormSubmit}>Submit</button>
                <button onClick={clear}>Clear</button>
            </div>
        </div>
    );
};

export default FoodTruckForm;