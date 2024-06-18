import { useState } from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";
import { Product } from "../../type";
import ProductModal from "../ProductModal/ProductModal";

const ProductCard = ({ product }: { product: Product }) => {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const toggleProductModal = () => {
    setIsProductModalOpen(!isProductModalOpen);
  };

  return (
    <>
      <Grid xs={4} key={product.id}>
        <Card
          sx={{
            cursor: "pointer",
          }}
          onClick={() => toggleProductModal()}
        >
          <CardMedia
            component="img"
            height="150"
            image={product.image}
            alt={product.title}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "200px",
            }}
          >
            <Box>
              <Typography variant="body2">
                {product.title.length > 60
                  ? `${product.title.slice(0, 60)}...`
                  : product.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "0.75rem", marginTop: "5px" }}
              >
                {product.description.length > 60
                  ? `${product.description.slice(0, 60)}...`
                  : product.description}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2">${product.price}</Typography>
              <Typography variant="body2">
                {product.rating.rate}&nbsp;⭐
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      {isProductModalOpen && (
        <ProductModal
          product={product}
          isProductModalOpen={isProductModalOpen}
          toggleProductModal={toggleProductModal}
        />
      )}
    </>
  );
};

export default ProductCard;
