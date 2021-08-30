import React from 'react';
import MapJar from '../MapJar/MapJar';
import { Typography } from '@material-ui/core';

const Dashboard = () => {
  return (
    <>
      <Typography variant="h4" align="center">Dashboard</Typography>
      <MapJar />
    </>
  )
}

export default Dashboard;