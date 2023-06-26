import axios from 'axios'

const VEHICLE_BASE_REST_API_URL = "http://localhost:8080/api/v1/vehicle_table";

export const listVehicles = () => {
    return axios.get(VEHICLE_BASE_REST_API_URL)
};

export const createVehicle = (vehicle) => {
    return axios.post(VEHICLE_BASE_REST_API_URL, vehicle)
}

export const getVehicleById = (vehicleId) => {
    return axios.get(VEHICLE_BASE_REST_API_URL + '/' + vehicleId);
}

export const updateVehicle = (vehicleId, vehicle) => {
    return axios.put(VEHICLE_BASE_REST_API_URL + '/' +vehicleId, vehicle);
}

export const deleteVehicle = (vehicleId) => {
    return axios.delete(VEHICLE_BASE_REST_API_URL + '/' + vehicleId);
}