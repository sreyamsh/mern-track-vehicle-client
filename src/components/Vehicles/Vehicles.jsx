import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, CircularProgress, Typography } from '@material-ui/core';
import Form from '../Form/Form';
import VehicleGrid from '../VehiclesGrid/VehicleGrid';
import SearchBar from '../SearchBar/SearchBar';
import { getVehicles } from '../../actions/vehiclesActions';


const Vehicles = () => {
  const dispatch = useDispatch();
  const vehiclesList = useSelector((state) => state.vehicles);
  const [open, setOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getVehicles());
  },[dispatch])

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
    setCurrentId(null);
  }

  return (
    <>
      <Typography variant="h4">Vehicles List</Typography>
      <Button variant="contained" color="primary" size="medium" onClick={handleOpen}>Add New Vehicle</Button>
      <Form open={open} handleClose={handleClose} currentId={currentId} />
      <SearchBar />
      {!vehiclesList.length ? <CircularProgress /> : <VehicleGrid setOpen={setOpen} setCurrentId={setCurrentId} />}
    </>
  )
}

export default Vehicles;