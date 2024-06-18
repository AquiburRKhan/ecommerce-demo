import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Product } from "../../type";
import Image from "next/image";

const ProductModal = ({
  product,
  isProductModalOpen,
  toggleProductModal,
}: {
  product: Product;
  isProductModalOpen: boolean;
  toggleProductModal: () => void;
}) => {
  return (
    <Dialog
      open={isProductModalOpen}
      onClose={toggleProductModal}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "400px",
          },
        },
      }}
    >
      <DialogTitle>{product.title}</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            position: "relative",
            display: "block",
            height: "200px",
            width: "150px",
            margin: "0 auto",
          }}
        >
          <Image src={product.image} alt={product.title} fill />
        </Box>
        <Typography variant="body1" sx={{ mt: "30px" }}>
          <strong>Description:</strong> {product.description}
        </Typography>
        <Box display="flex" justifyContent="space-between" mt="50px">
          <Typography variant="body1">Price: ${product.price}</Typography>
          <Typography variant="body1" textAlign="right">
            Rating: {product.rating.rate}&nbsp;⭐
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
