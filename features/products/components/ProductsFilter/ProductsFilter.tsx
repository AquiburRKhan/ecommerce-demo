import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Category } from "../../type";
import { toggleCategory } from "../../slice/categories";
import { updateSelectedPrices } from "../../slice/prices";

const ProductsFilter = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories);
  const prices = useAppSelector((state) => state.prices);

  const handleCategoryChange = (category: Category) => {
    dispatch(toggleCategory(category));
  };

  const handlePriceChange = (_: any, newValue: number | number[]) => {
    dispatch(updateSelectedPrices(newValue as number[]));
  };

  return (
    <Grid container spacing={2}>
      {categories.length > 0 ? (
        <Grid xs={12}>
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
              <FormGroup key={category.name}>
                <FormControlLabel
                  control={
                    <Checkbox onChange={() => handleCategoryChange(category)} />
                  }
                  label={category.name}
                />
              </FormGroup>
            ))}
          </Stack>
        </Grid>
      ) : null}

      {Object.keys(prices).length > 0 ? (
        <Grid xs={12}>
          <Box>
            <Typography
              component="h2"
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              Prices
            </Typography>
          </Box>
          <Slider
            sx={{
              width: "250px",
              marginLeft: "10px",
            }}
            step={10}
            value={[
              prices.selectedMinPrice as number,
              prices.selectedMaxPrice as number,
            ]}
            marks={[
              {
                value: prices.minPrice as number,
                label: `$${prices.minPrice}`,
              },
              {
                value: prices.maxPrice as number,
                label: `$${prices.maxPrice}`,
              },
            ]}
            min={prices.minPrice as number}
            max={prices.maxPrice as number}
            onChange={handlePriceChange}
          />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default ProductsFilter;
