import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const Header = () => {
  return (
    <>
      <header>
        <Typography variant="h2">Vehicle Tracker</Typography>
        <ul>
          <li>
            <Link to='/'>Dashboard</Link>
          </li>
          <li>
            <Link to='/vehicles'>Vehicles</Link>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Header;