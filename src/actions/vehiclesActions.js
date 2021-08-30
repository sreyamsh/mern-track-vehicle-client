import { FETCH_ALL, CREATE, UPDATE, DELETE, QUERY } from "./actionTypes";
import * as api from '../api';

export const getVehicles = () => async (dispatch) => {
 try {
   const { data } = await api.fetchVehicles();
   dispatch({ type: FETCH_ALL, payload: data });
 } catch (e) {
   throw new Error(e);
 }
};

export const createVehicle = (vehicleData) => async (dispatch) => {
  try {
    const { data } = api.createVehicle(vehicleData);

    dispatch({ type: CREATE, payload: data });
  } catch (e) {
    throw new Error(e);
  }
}

export const updateVehicle = (id, vehicleData) => async (dispatch) => {
  try {
    const { data } = await api.updateVehicle(id, vehicleData);

    dispatch({ type: UPDATE, payload: data });
  } catch (e) {
    throw new Error(e);
  }
}

export const deleteVehicle = (id) => async (dispatch) => {
  try {
    await api.deleteVehicle(id);

    dispatch({type: DELETE, payload: id });
  } catch (e) {
    throw new Error(e);
  }
}

export const queryVehicle = (queryType, queryValue) => async (dispatch) => {
  try {
    const { data } = await api.queryVehicle(queryType, queryValue);

    dispatch({ type: QUERY, payload: data });
  } catch (e) {
    throw new Error(e);
  }
}