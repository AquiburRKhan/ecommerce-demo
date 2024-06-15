import { useAppSelector } from "@/lib/hooks";
import { Box, Stack, Typography } from "@mui/material";

const ProductsFilter = () => {
  const categories = useAppSelector((state) => state.categories);
  return (
    <Stack>
      <Box>
        <Typography
          component="h2"
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            marginBottom: "5px",
          }}
        >
          Categories
        </Typography>
      </Box>
      <Stack>
        {categories.map((category) => (
          <Box key={category}>
            <Typography>{category}</Typography>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default ProductsFilter;
