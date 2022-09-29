import React, { useState, useEffect, useRef, useCallback } from "react";
import { fetchFoodTrucks } from "./api.js";
import { formatDate } from "./utils/date-utils.js";
import FoodTruckForm from "./components/FoodTruckForm/FoodTruckForm.js";
import FoodTruckList from "./components/FoodTruckList/FoodTruckList.js";
import "./App.styles.css";

const App = () => {
    const allTrucks = useRef([]);
    const [truckList, setTruckList] = useState([]);
    const [selectedTruck, setSelectedTruck] = useState({name: "", date: ""});
    const [isEdit, setEdit] = useState(false);
    const [showAllTrucks, setShowAllTrucks] = useState(false);

    const getTodayTrucks = () => allTrucks.current.filter(({ date }) => {
        return new Date(date).toDateString() === new Date().toDateString();
    });

    const fetchFoodTruckData = useCallback(() => {
        fetchFoodTrucks().then(data => {
            allTrucks.current = (data || []).map(({ date, ...props }) => ({...props, date: formatDate(date)}));
            setTruckList(showAllTrucks ? allTrucks.current : getTodayTrucks());
        });
    }, [showAllTrucks]);

    useEffect(() => {
        fetchFoodTruckData();
    }, [fetchFoodTruckData]);

    const onListTypeChange = value => {
        if (showAllTrucks !== value) {
            setShowAllTrucks(!showAllTrucks);
            setTruckList(showAllTrucks ? allTrucks.current : getTodayTrucks());
        }
    }

    const clearSelection = () => {
        setSelectedTruck({name: "", date: ""});
        setEdit(false);
    }

    const onSubmit = () => {
        fetchFoodTruckData();
        clearSelection();
    };

    const onEditClick = id => {
        setEdit(true);
        setSelectedTruck(truckList.find(({ _id }) => _id === id));
    }

    return (
        <div className="food-truck-app">
            <div className="app-header">Food truck service</div>
            <div className="food-truck-body">
                <FoodTruckForm 
                    data={selectedTruck} 
                    isEdit={isEdit} 
                    onSubmit={onSubmit}
                    onClear={clearSelection} 
                />
                <FoodTruckList 
                    truckList={truckList}
                    showAllTrucks={showAllTrucks} 
                    onEditClick={onEditClick}
                    onListTypeChange={onListTypeChange} 
                />
            </div>
        </div>
    );
};

export default App;