import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData } from './api';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => {
      setCoordinates({ lat: latitude, lng: longitude});
    })

  }, []);

  useEffect(() => {
    console.log(coordinates, bounds);
    setIsLoading(true);
    getPlacesData(bounds?.sw, bounds?.ne) /*will happen only at the start of function */
      .then((data) => {
        console.log(data);

        setPlaces(data);
        setIsLoading(false);
      })
  }, [coordinates, bounds]); /*updates as you move */

  return (
    <>  {/* //react tag */}
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>  {/* //double curly braces = object*/}
          <Grid item xs={12} md={4}>  {/* //phones fullscreen, desktop not*/}
            <List
              places={places}
              childClicked={childClicked}
              isLoading={isLoading}

            /> {/*self closing tag*/}

          </Grid>
          <Grid item xs={12} md={8}>
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={places}
              setChildClicked={setChildClicked}
            />
          </Grid>
      </Grid>
    </>
  )
}

export default App;
