import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <h1>Vehicle Tracker</h1>
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