import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, CircularProgress } from '@material-ui/core';
import Form from '../Form/Form';
import VehicleGrid from '../VehiclesGrid/VehicleGrid';

const Vehicles = () => {
  const vehiclesList = useSelector((state) => state.vehicles);
  const [open, setOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  console.log("", vehiclesList);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
    setCurrentId(null);
  }

  return (
    <>
      <h2>Vehicles</h2>
      <Button variant="contained" color="primary" size="medium" onClick={handleOpen}>Add New Vehicle</Button>
      <Form open={open} handleClose={handleClose} currentId={currentId} />
      {!vehiclesList.length ? <CircularProgress /> : <VehicleGrid setOpen={setOpen} setCurrentId={setCurrentId} />}
    </>
  )
}

export default Vehicles;