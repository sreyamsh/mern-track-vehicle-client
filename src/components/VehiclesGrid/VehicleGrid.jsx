import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { deleteVehicle } from '../../actions/vehiclesActions';

const columns = [
  { id:'Vin', label: 'Vin', minWidth: 100 },
  { id:'LicencePlate', label: 'Licence Plate', minWidth: 170 },
  { id:'Driver', label: 'Driver', minWidth: 170 },
  { id:'MMY', label: 'Year, Make, Model', minWidth: 170 },
  { id:'CustomerName', label: 'Customer Name', minWidth: 170 },
  { id:'Office', label: 'Office', minWidth: 170 },
  { id:'ignition', label: 'Ignition', minWidth: 170 },
  { id:'speed', label: 'Speed(mph)', minWidth: 170 },
  { id:'lat', label: 'Latitude', minWidth: 170 },
  { id:'lon', label: 'Longitude', minWidth: 170 }
];

const VehicleGrid = (props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const dispatch = useDispatch();
  const vehiclesList = useSelector((state) => state.vehicles);
  const { setCurrentId, setOpen } = props;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const Rows = () => {
    return(
      <>
        {vehiclesList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((vehicle) => (
          <TableRow hover key={vehicle._id}>
            {columns.map((column) => {
              let value;
              switch(column.id) {
                case 'lon':
                  value = vehicle.Status?.location?.lon;
                  break
                case 'lat':
                  value = vehicle.Status?.location?.lat;
                  break
                case 'speed':
                  value = vehicle.Status?.speed;
                  break
                case 'ignition':
                  value = vehicle.Status?.ignition;
                  break
                default:
                  value = vehicle[column.id];
                  break
              }
              return <TableCell key={column.id}>{value}</TableCell>;
            })}
            <TableCell>
              <Button size="small" onClick={() => {setOpen(true); setCurrentId(vehicle._id);}}>
                <EditIcon fontSize="small" />
              </Button>
              <Button size="small" onClick={() => dispatch(deleteVehicle(vehicle._id))}>
                <DeleteIcon fontSize="small" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </>
    );
  }

  return (
    <>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => <TableCell key={column.id}>{column.label}</TableCell>)}
                <TableCell align="center">Edit/Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <Rows />
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={vehiclesList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Paper>
    </>
  );
}

export default VehicleGrid;