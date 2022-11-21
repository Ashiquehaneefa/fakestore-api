//Drawer is a material UI component provides a side panel when a button is clicked


import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import FilterByPrice from './Filter/FilterByPrice'
import FilterByCategory from './Filter/FilterByCatergory';
import Sort from './Sort/Sort';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  button: {
    border: "1px solid",
    marginLeft:'1rem'
  }
});

export default function SwipeableTemporaryDrawer({resetFilters, handlePriceChange, priceValue, category, handleCategory, sortValue, handleSort }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };



  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        
        <FilterByPrice handlePriceChange={handlePriceChange} value={priceValue}/>
        <FilterByCategory category={category} handleCategory={handleCategory} />
        <Sort sortValue={sortValue} handleSort={handleSort}/>
        <Button className={classes.button} onClick={resetFilters}>Reset filters</Button>
      </List>
      <Divider />
      
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>Filters</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}