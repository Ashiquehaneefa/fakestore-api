import React from 'react'
import { MenuItem, FormControl, Select,InputLabel} from '@material-ui/core'
import { makeStyles } from '@material-ui/core';

//Similar to filter by category the sort component uses the menu component from material Ui to show different sorting options

export default function Sort({sortValue, handleSort}) {

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
          <InputLabel id="demo-controlled-open-select-label">Sort by</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={sortValue}
            onChange={handleSort}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"hightolow"}>High to low</MenuItem>
            <MenuItem value={"lowtohigh"}>low to high</MenuItem>
            
          </Select>
        </FormControl>
      </div>
    );
}


