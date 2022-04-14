import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import useStyles from './styles';

const SearchBar = ({ search, setSearch }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.searchGrid} item container xs={12}>
      <TextField
        name="search"
        variant="outlined"
        label="Search"
        value={search}
        fullWidth
        placeholder="Search by name, type, city or state"
        onChange={(e) => setSearch(e.target.value)}
      />
    </Grid>
  );
};

export default SearchBar;
