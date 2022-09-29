import axios from "axios";

const url = "http://localhost:4000/food-trucks";

export const fetchFoodTrucks = async () => {
    return axios.get(url).then(response => response.data).catch(error => console.log(error));
};

export const createFoodTruck = async (truckData) => {
    return axios.post(url, truckData).then(response => response.data).catch(error => console.log(error));
};

export const updateFoodTruck = async (truckData) => {
    return axios.patch(url+"/"+truckData._id, truckData).then(response => response.data).catch(error => console.log(error));
};
