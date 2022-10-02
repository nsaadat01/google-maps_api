import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core'; {/*circularprogress is loading icon */}
import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles';

const List = ( {places, childClicked, isLoading} ) => {
  const classes = useStyles();
  const [type, setType] = useState('restaurants'); {/*first thing is the state, second is the function that modifies state */}
  const [rating, setRating] = useState('');
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef()); {/*underscore means not gonna use first parameter */}

    setElRefs(refs);
  }, [places]); {/*jumps to place on list */}

  return (
    <div className={classes.container}>
      <Typography variant="h4">Restaurants nearby</Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem"/>
        </div>
      ) : (
        <>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}> /*needs usestate to be activated*/
          <MenuItem value="restaurants">Restaurants</MenuItem>
      
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}> /*needs usestate to be activated*/
          <MenuItem value={0}>All</MenuItem>

        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}> {/*usually not good practice, but not deleting items from list so it's fine*/}
            <PlaceDetails
              place={place}
              selected={Number(childClicked) == i}
              refProp={elRefs[i]}
            />
          </Grid>
        ))} {/*only if you have places, map over them*/}
      </Grid>
      </>
    )}
    </div>
  );
}

export default List;
