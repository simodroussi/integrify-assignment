import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Card,
  CardContent,
  Button,
  Typography,
  CardActions,
} from '@material-ui/core';
import useStyles from './styles';

const BreweryCard = ({ brewery }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.details}>
          <Typography variant="h6" color="textPrimary">
            {brewery.name}
          </Typography>
          <Typography variant="body2" color="textPrimary">
            {brewery.brewery_type}
          </Typography>
          <Typography variant="body2" color="textPrimary">
            {brewery.city}, {brewery.state}
          </Typography>
          <Typography variant="body2" color="textPrimary">
            {brewery.country}
          </Typography>
        </div>
      </CardContent>
      <CardActions className={classes.cardAction}>
        <Button
          className={classes.button}
          onClick={() => navigate(`breweries/${brewery.id}`)}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default BreweryCard;
