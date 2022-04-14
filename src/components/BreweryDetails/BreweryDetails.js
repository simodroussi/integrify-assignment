import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  Card,
  CardContent,
  Button,
  Typography,
  CardActions,
} from '@material-ui/core';
import useStyles from './styles';

const BreweryDetails = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { id } = useParams();
  const breweries = useSelector((state) => state.breweries);
  const brewery = breweries.find((item) => item.id === id);

  const {
    name,
    brewery_type,
    street,
    postal_code,
    phone,
    city,
    state,
    country,
    website_url,
  } = brewery || {};

  const navigateToHome = () => {
    navigate(-1);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.details}>
          {name && (
            <Typography variant="h6" color="textPrimary">
              Name: {name}
            </Typography>
          )}
          {brewery_type && (
            <Typography variant="body2" color="textPrimary">
              Type: {brewery_type}
            </Typography>
          )}
          {street && (
            <Typography variant="body2" color="textPrimary">
              Address: {street}, {postal_code}
            </Typography>
          )}
          {phone && (
            <Typography variant="body2" color="textPrimary">
              Phone: {phone}
            </Typography>
          )}
          {city && (
            <Typography variant="body2" color="textPrimary">
              City: {city}, {state}
            </Typography>
          )}
          {country && (
            <Typography variant="body2" color="textPrimary">
              Country: {country}
            </Typography>
          )}
          {website_url && (
            <Typography variant="body2" color="textPrimary">
              Website:{' '}
              <a href={website_url} target="_blank" rel="noreferrer">
                {website_url}
              </a>
            </Typography>
          )}
        </div>
      </CardContent>
      <CardActions className={classes.cardAction}>
        <Button
          className={classes.button}
          variant="contained"
          onClick={navigateToHome}
        >
          Go Back
        </Button>
      </CardActions>
    </Card>
  );
};
export default BreweryDetails;
