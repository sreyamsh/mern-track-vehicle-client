import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Typography, Paper, Tabs, Tab } from '@material-ui/core';

const Header = () => {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <header>
        <Typography variant="h2" align="center">Vehicle Tracker</Typography>
        <Paper>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab value="/" component={Link} to='/' label="Dashboard" />
            <Tab value="/vehicles" component={Link} to='/vehicles' label="Vehicles"><Link to='/vehicles' /></Tab>
          </Tabs>
        </Paper>
      </header>
    </>
  )
}

export default Header;