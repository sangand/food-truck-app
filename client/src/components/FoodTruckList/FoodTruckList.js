import React from "react";
import { formatDate } from "../../utils/date-utils.js";
import "./FoodTruckList.styles.css";

const FoodTruckList = ({ truckList, showAllTrucks, onEditClick, onListTypeChange }) => {
    return (
        <div className="food-truck-list">
            <div className="list-type">
                <div onClick={() => onListTypeChange(false)}>
                    <input type="radio" checked={!showAllTrucks} />
                    <label>Today's trucks</label>
                </div>
                <div onClick={() => onListTypeChange(true)}>
                    <input type="radio" checked={showAllTrucks} className="all-trucks-option" />
                    <label>All trucks</label>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Truck Name</th>
                        <th>Date</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {truckList.map(({ _id, name, date }) => (
                        <tr key={_id}>
                            <td>{name}</td>
                            <td>{formatDate(date)}</td>
                            <td><button onClick={onEditClick.bind(null, _id)}>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FoodTruckList;