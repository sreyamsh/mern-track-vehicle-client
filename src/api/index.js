import axios from 'axios';

const url = 'http://localhost:5000/vehicles';

export const fetchVehicles = () => axios.get(url);

export const createVehicle = (newVehicle) => axios.post(url, newVehicle);

export const updateVehicle = (id, updatedVehicle) => axios.post(`${url}/${id}`, updatedVehicle);

export const deleteVehicle = (id) => axios.delete(`${url}/${id}`);

export const queryVehicle = (queryType, queryValue) => axios.get(`${url}?${queryType}=${queryValue}`)