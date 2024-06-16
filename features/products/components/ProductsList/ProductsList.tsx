"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  MenuItem,
  Pagination,
  Select,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Product } from "../../type";
import {
  initializePagination,
  updateLimit,
  updatePage,
} from "../../slice/pagination";

const ProductsList = () => {
  const dispatch = useAppDispatch();
  const pagination = useAppSelector((state) => state.pagination);
  const allProducts = useAppSelector((state) => state.products);
  const categories = useAppSelector((state) => state.categories);
  const prices = useAppSelector((state) => state.prices);

  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(allProducts);
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);

  const getProductsFilteredByCategory = () => {
    const selectedCategories = categories.filter(
      (category) => category.checked
    );

    if (selectedCategories.length === 0) {
      return allProducts;
    } else {
      const filteredProducts = allProducts.filter((product) =>
        selectedCategories.some(
          (category) => category.name === product.category
        )
      );

      return filteredProducts;
    }
  };

  const getProductsFilteredByPrice = (productsArr: Product[]) => {
    return productsArr.filter(
      (product) =>
        product.price >= prices.selectedMinPrice! &&
        product.price <= prices.selectedMaxPrice!
    );
  };

  const searchAndFilterProducts = () => {
    const productsFilteredByCategory = getProductsFilteredByCategory();

    const productsFilteredByPrice = getProductsFilteredByPrice(
      productsFilteredByCategory
    );

    dispatch(initializePagination(productsFilteredByPrice));
    setFilteredProducts(productsFilteredByPrice);
  };

  useEffect(() => {
    searchAndFilterProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prices, categories]);

  const paginateFilteredProducts = () => {
    if (filteredProducts.length > 0) {
      const start = (pagination.page - 1) * pagination.limit;
      const end = start + pagination.limit;
      setDisplayProducts(filteredProducts.slice(start, end));
    }
  };

  useEffect(() => {
    paginateFilteredProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredProducts, pagination]);

  return (
    <>
      {displayProducts.length > 0 ? (
        <>
          <Grid container spacing={2}>
            {displayProducts.map((product) => (
              <Grid xs={4} key={product.id}>
                <Card
                  sx={{
                    minHeight: "300px",
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
          <Box display="flex" justifyContent="space-between" mt="20px">
            <Select
              sx={{
                height: "32px",
              }}
              value={pagination.limit}
              onChange={(event: any) => {
                dispatch(updateLimit(event.target.value));
              }}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
            </Select>
            <Pagination
              count={pagination.numberOfPages}
              page={pagination.page}
              onChange={(_, value: number) => {
                dispatch(updatePage(value));
              }}
              color="primary"
            />
          </Box>
        </>
      ) : null}
    </>
  );
};

export default ProductsList;
