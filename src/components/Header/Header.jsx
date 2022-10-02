import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles'; {/*use styles is a hook */}

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}> {/*classes imported in styles */}
        <Typography variant="h5" className={classes.title}> {/* can change the variant to heading, body, etc */}
          Travel Advisor
        </Typography> {/* typography is every single text element*/}
        <Box display="flex">
          <Typography variant="h6" className={classes.title}> {/* can change the variant to heading, body, etc */}
            Explore new places
          </Typography> {/* typography is every single text element*/}
        {/*}  <Autocomplete> */}
            <div className={classes.search}> {/*search bar */}
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput}} />
            </div>
        {/*}  </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
