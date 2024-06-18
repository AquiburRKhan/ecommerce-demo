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
import { updateSelectedRatings } from "../../slice/ratings";

const ProductsFilter = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories);
  const prices = useAppSelector((state) => state.prices);
  const ratings = useAppSelector((state) => state.ratings);

  const handleCategoryChange = (category: Category) => {
    dispatch(toggleCategory(category));
  };

  const handlePriceChange = (_: any, newValue: number | number[]) => {
    dispatch(updateSelectedPrices(newValue as number[]));
  };

  const handleRatingsChange = (_: any, newValue: number | number[]) => {
    dispatch(updateSelectedRatings(newValue as number[]));
  };

  return (
    <Grid container spacing={2}>
      {categories.length > 0 && Object.keys(prices).length > 0 ? (
        <>
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
                      <Checkbox
                        onChange={() => handleCategoryChange(category)}
                      />
                    }
                    label={category.name}
                  />
                </FormGroup>
              ))}
            </Stack>
          </Grid>

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
                Price Range
              </Typography>
            </Box>
            <Slider
              sx={{
                width: "250px",
                marginLeft: "10px",
              }}
              step={5}
              value={[
                prices.selectedMinPrice as number,
                prices.selectedMaxPrice as number,
              ]}
              marks={[
                {
                  value: 0,
                  label: "$0",
                },
                {
                  value: prices.maxPrice as number,
                  label: `$${prices.maxPrice}`,
                },
              ]}
              min={0}
              max={prices.maxPrice as number}
              valueLabelDisplay="auto"
              onChange={handlePriceChange}
            />
          </Grid>

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
                Ratings
              </Typography>
            </Box>
            <Slider
              sx={{
                width: "250px",
                marginLeft: "10px",
              }}
              step={1}
              value={[
                ratings.selectedMinRating as number,
                ratings.selectedMaxRating as number,
              ]}
              marks={[
                {
                  value: 0 as number,
                  label: "0 ⭐",
                },
                {
                  value: 5,
                  label: "5 ⭐",
                },
              ]}
              min={0}
              max={5}
              valueLabelDisplay="auto"
              onChange={handleRatingsChange}
            />
          </Grid>
        </>
      ) : null}
    </Grid>
  );
};

export default ProductsFilter;
