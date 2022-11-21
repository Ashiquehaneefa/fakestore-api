import React from "react";
import { Typography, Slider } from "@material-ui/core";
import useStyles from "./styles";

//Slider component from material UI, filter the price range wanted

export default function FilterByPrice({value, handlePriceChange}) {

  const classes = useStyles();
   
  
  function valuetext(value) {
    return `${value}`;
  }
  
  return (
    <div className={classes.slider}>
      
      <Typography id="range-slider" gutterBottom>
        Price range
      </Typography>
      <Slider
        max={1000}
        step={50}
        value={value}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
