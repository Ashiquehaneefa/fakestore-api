import React from 'react'
import {Button, Menu, MenuItem, FormControl, Select,InputLabel} from '@material-ui/core'
import { makeStyles } from '@material-ui/core';

//Menu component from material UI used to house options for filtering the category

export default function FilterByCategory({handleCategory, category}) {

    const useStyles = makeStyles((theme) => ({
        button: {
          display: 'block',
          marginTop: theme.spacing(2),
        },
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
    }));

    const classes = useStyles();
    // const [cat, setCat] = React.useState('');
    const [open, setOpen] = React.useState(false);
  

    
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    return (
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={category}
            onChange={handleCategory}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"men's clothing"}>men clothing</MenuItem>
            <MenuItem value={"women's clothing"}>women clothing</MenuItem>
            <MenuItem value={"jewelery"}>jewelery</MenuItem>
            <MenuItem value={"electronics"}>electronics</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
}

