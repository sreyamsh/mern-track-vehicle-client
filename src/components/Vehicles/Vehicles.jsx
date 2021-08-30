import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, CircularProgress, Typography } from '@material-ui/core';
import Form from '../Form/Form';
import VehicleGrid from '../VehiclesGrid/VehicleGrid';
import SearchBar from '../SearchBar/SearchBar';
import { getVehicles } from '../../actions/vehiclesActions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  submitButton: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
  },
}));

const Vehicles = () => {
  const classes = useStyles();
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
      <Typography variant="h4" align="center">Vehicles List</Typography>
      <Button className={classes.submitButton} variant="contained" color="primary" size="medium" onClick={handleOpen}>Add New Vehicle</Button>
      <Form open={open} handleClose={handleClose} currentId={currentId} />
      <SearchBar />
      {!vehiclesList.length ? <CircularProgress /> : <VehicleGrid setOpen={setOpen} setCurrentId={setCurrentId} />}
    </>
  )
}

export default Vehicles;