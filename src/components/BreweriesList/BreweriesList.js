import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Grid, CircularProgress, Grow } from '@material-ui/core';
import useStyles from './styles';

import BreweryCard from './BreweryCard/BreweryCard';
import SearchBar from './SearchBar/SearchBar';

const BreweriesList = () => {
  const classes = useStyles();
  const breweries = useSelector((state) => state.breweries);
  const [search, setSearch] = useState('');
  const searchParams = ['name', 'brewery_type', 'city', 'state'];

  const handleSearch = (breweriesList) => {
    return breweriesList.filter((brewery) => {
      return searchParams.some((param) => {
        return brewery[param]
          .toString()
          .toLowerCase()
          .includes(search.toLowerCase());
      });
    });
  };

  return !breweries.length ? (
    <CircularProgress />
  ) : (
    <Grow in>
      <Grid
        container
        justifyContent="space-between"
        alignItems="stretch"
        spacing={3}
      >
        <SearchBar search={search} setSearch={setSearch} />
        <Grid item xs={12}>
          <Grid
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
          >
            {handleSearch(breweries).map((brewery) => (
              <Grid key={brewery.id} item xs={12} sm={6} md={4}>
                <BreweryCard brewery={brewery} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grow>
  );
};

export default BreweriesList;
