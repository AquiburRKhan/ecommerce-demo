"use client";

import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useAppSelector } from "@/lib/hooks";

const ProductsList = () => {
  const products = useAppSelector((state) => state.products);

  console.log(products);

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid xs={4} key={product.id}>
          <Card
            sx={{
              height: "100%",
            }}
          >
            <CardMedia
              component="img"
              height="150"
              image={product.image}
              alt={product.title}
            />
            <CardContent>
              <Typography variant="body2">{product.title}</Typography>
              <Typography variant="body2">{product.price}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
