"use client";

import React, { useEffect } from "react";
import Header from "../Header/Header";
import ProductsList from "@/features/products/components/ProductsList/ProductsList";
import { Container, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Product } from "@/features/products/type";
import { useAppDispatch } from "@/lib/hooks";
import { addProducts, clearProducts } from "@/features/products/slice/products";
import {
  addCategories,
  clearCategories,
} from "@/features/products/slice/categories";
import ProductsFilter from "@/features/products/components/ProductsFilter/ProductsFilter";
import {
  initializePagination,
  resetPagination,
} from "@/features/products/slice/pagination";
import {
  initializePrices,
  resetPrices,
} from "@/features/products/slice/prices";

const Main = ({ products }: { products: Product[] }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addProducts(products));
    dispatch(addCategories(products));
    dispatch(initializePagination(products));
    dispatch(initializePrices(products));

    return () => {
      dispatch(clearProducts());
      dispatch(clearCategories());
      dispatch(resetPagination());
      dispatch(resetPrices());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack>
      <Header />
      <Container
        sx={{
          paddingTop: "20px",
          paddingBottom: "60px",
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={4}>
            <ProductsFilter />
          </Grid>
          <Grid xs={8}>{products.length > 0 ? <ProductsList /> : null}</Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Main;
