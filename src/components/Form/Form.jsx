import React, { useState, useEffect } from 'react';
import { TextField, Button, Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createVehicle, updateVehicle } from '../../actions/vehiclesActions';

const Form = (props) => {
  const classes = {};
  const dispatch = useDispatch();
  const { open, handleClose, currentId } = props;
  const vehicleToEdit = useSelector((state) => currentId ? state.vehicles.find((i) => i._id === currentId) : null);
  const [vehicleData, setVehicleData] = useState({
    Vin: '',
    LicencePlate: '',
    Driver: '',
    MMY: '',
    CustomerName: '',
    Office: '',
    Status: {
      ignition: '',
      speed: '',
      location: {
        lat: '',
        lon: ''
      }
    }
  });

  useEffect(() => {
    if(vehicleToEdit) {
      setVehicleData(vehicleToEdit);
    }
  }, [vehicleToEdit])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId) {
      dispatch(updateVehicle(currentId, vehicleData));
    } else {
      dispatch(createVehicle(vehicleData));
    }
    clear();
  }

  const clear = () => {
    setVehicleData({    
      Vin: '',
      LicencePlate: '',
      Driver: '',
      MMY: '',
      CustomerName: '',
      Office: '',
      Status: {
        ignition: '',
        speed: '',
        location: {
          lat: '',
          lon: ''
        }
      }
    });
    handleClose();
  }

  return(
    <Dialog className={classes.Dialog} open={open} onClose={clear}>
      <DialogTitle id="form-dialog-title">{ currentId ? 'Edit' : 'Add New' } Vehicle</DialogTitle>
      <DialogContent>
        <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
          <TextField 
            name="Vin"
            variant="outlined"
            label="Vin"
            value={vehicleData.Vin}
            onChange={(e) => setVehicleData({ ...vehicleData, Vin: e.target.value })}
            fullWidth
          />
          <TextField 
            name="LicencePlate"
            variant="outlined"
            label="LicencePlate"
            value={vehicleData.LicencePlate}
            onChange={(e) => setVehicleData({ ...vehicleData, LicencePlate: e.target.value })}
            fullWidth
          />
          <TextField 
            name="Driver"
            variant="outlined"
            label="Driver"
            value={vehicleData.Driver}
            onChange={(e) => setVehicleData({ ...vehicleData, Driver: e.target.value })}
            fullWidth
          />
          <TextField 
            name="MMY"
            variant="outlined"
            label="Make, Model, Year"
            value={vehicleData.MMY}
            onChange={(e) => setVehicleData({ ...vehicleData, MMY: e.target.value })}
            fullWidth
          />
          <TextField 
            name="CustomerName"
            variant="outlined"
            label="Customer Name"
            value={vehicleData.CustomerName}
            onChange={(e) => setVehicleData({ ...vehicleData, CustomerName: e.target.value })}
            fullWidth
          />
          <TextField 
            name="Office"
            variant="outlined"
            label="Office"
            value={vehicleData.Office}
            onChange={(e) => setVehicleData({ ...vehicleData, Office: e.target.value })}
            fullWidth
          />
          <label>Status</label>
          <TextField 
            name="ignition"
            variant="outlined"
            label="Ignition"
            value={vehicleData.Status?.ignition}
            onChange={(e) => setVehicleData({ ...vehicleData, Status: { ...vehicleData.Status, ignition: e.target.value }})}
            fullWidth
          />
          <TextField 
            name="speed"
            variant="outlined"
            label="Speed"
            value={vehicleData.Status?.speed}
            onChange={(e) => setVehicleData({ ...vehicleData, Status: { ...vehicleData.Status, speed: e.target.value }})}
            fullWidth
          />
          <label>Location</label>
          <TextField 
            name="lat"
            variant="outlined"
            label="Lat"
            value={vehicleData.Status?.location?.lat}
            onChange={(e) => setVehicleData({ ...vehicleData, Status: { ...vehicleData.Status, location: { ...vehicleData.Status.location, lat: e.target.value }}})}
            fullWidth
          />
          <TextField 
            name="lon"
            variant="outlined"
            label="Lon"
            value={vehicleData.Status?.location?.lon}
            onChange={(e) => setVehicleData({ ...vehicleData, Status: { ...vehicleData.Status, location: { ...vehicleData.Status.location, lon: e.target.value }}})}
            fullWidth
          />
          <Button variant="contained" color="secondary" size="large" onClick={clear}>Cancel</Button>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default Form;