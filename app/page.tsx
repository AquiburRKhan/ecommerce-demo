import { getProducts } from "@/features/products/api";
import { Box } from "@mui/material";
import Main from "@/features/layout/components/Main/Main";

const Home = async () => {
  try {
    const response = await getProducts();
    const products = response.data;

    return (
      <Box component="main">
        <Main products={products} />
      </Box>
    );
  } catch {
    throw new Error("Something went wrong when fetching products.");
  }
};

export default Home;
