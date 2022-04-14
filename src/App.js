import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

import { getBreweries } from './redux/actions/breweries';

import { Container, AppBar, Typography } from '@material-ui/core';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import useStyles from './styles';

import BreweriesList from './components/BreweriesList/BreweriesList';
import BreweryDetails from './components/BreweryDetails/BreweryDetails';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBreweries());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Container className={classes.container} maxwidth="lg">
        <AppBar position="static" color="inherit" className={classes.appBar}>
          <Typography variant="h3" align="center" className={classes.header}>
            Breweries
          </Typography>
          <SportsBarIcon fontSize="large" className={classes.icon} />
        </AppBar>
        <Routes>
          <Route path="/" element={<BreweriesList />} />
          <Route path="/breweries/:id" element={<BreweryDetails />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
