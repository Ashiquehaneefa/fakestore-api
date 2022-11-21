import React from "react";


import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./Product/styles";


//Products component returns mapped over products

export default function Products({
  sortPrice,
  data,
  input,
  category,
  priceValue,
  sortValue,
}) {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {/* sorting */}
        {sortPrice(sortValue, data)}
        {data
          //this filter function below checks the category, if its an empty string returns all products otherwise returns products by there category
          .filter((product) => {
            if (category === "") {
              return product;
            } else if (product.category === category) {
              return product;
            }
          })
          //this filter function, allows user to search for a specific product by comparing the input and the titles or part of the title
          .filter((product) => {
            if (input === null || input === "") {
              return product;
            } else if (
              product.title.toLowerCase().includes(input.toLowerCase())
            ) {
              return product;
            }
          })
          //this filter function compares the slider min and max and to the each product's price and returns all products in range
          .filter((product) => {
            if (
              product.price >= priceValue[0] &&
              product.price <= priceValue[1]
            ) {
              return product;
            } else {
              console.log("No products in this range");
              
            }
          })
          .map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
