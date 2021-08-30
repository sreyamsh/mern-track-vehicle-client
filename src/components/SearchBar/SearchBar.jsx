import React, { useState } from 'react';
import { AppBar, Select, MenuItem, Toolbar, InputBase, Typography, Button } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { queryVehicle } from '../../actions/vehiclesActions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  AppBar: {
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: '#90caf9',
  },
  buttonSubmit: {
    marginLeft: 5,
    marginRight: 5,
  },
}));

const SearchBar = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [queryType, setQueryType] = useState("");
  const [queryValue, setQueryValue] = useState("");

  const handleChange = (event) => {
    setQueryType(event.target.value);
  };

  const SearchValueChange = (event) => {
    setQueryValue(event.target.value);
  };

  const searchQuery = () => {
    if(queryType && queryValue) {
      dispatch(queryVehicle(queryType, queryValue));
    }
  }

  return (
    <>
      <AppBar className={classes.AppBar} position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Search Vehicles
          </Typography>
          <Select
            value={queryType}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="" disabled>Query Type</MenuItem>
            <MenuItem value="count">Range</MenuItem>
            <MenuItem value="vin">VIN</MenuItem>
          </Select>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={SearchValueChange}
              value={queryValue}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="medium" onClick={searchQuery}>Search Query</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default SearchBar