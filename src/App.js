import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getVehicles } from './actions/vehiclesActions';
import Dashboard from './components/Dashboard/Dashboard';
import Vehicles from './components/Vehicles/Vehicles';
import Header from './components/Header/Header';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVehicles());
  }, [dispatch])

  return (
    <>
      <main>
        <Header />
        <Switch>
          <Route 
            path='/'
            render={(props) => <Dashboard {...props} title="Dashboard" />}
            exact 
          />
          <Route
            path='/vehicles'
            render={(props)=> <Vehicles {...props} title="Vehicle List" />}
          />
        </Switch>
      </main>
    </>
  )
}

export default App;