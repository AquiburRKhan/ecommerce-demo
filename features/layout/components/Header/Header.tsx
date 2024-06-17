import { setSearchValue } from "@/features/products/slice/search";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import theme from "@/theme";
import { Search } from "@mui/icons-material";
import {
  Container,
  Typography,
  Avatar,
  InputBase,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Header = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search);

  return (
    <Box
      component="header"
      sx={{
        backgroundColor: theme.palette.primary.main,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      }}
    >
      <Container>
        <Grid container alignItems="center">
          <Grid xs={3}>
            <Typography
              variant="body1"
              fontSize="1.3rem"
              fontWeight="bold"
              color="primary.contrastText"
            >
              E-Commerce
            </Typography>
          </Grid>
          <Grid xs={6}>
            <InputBase
              fullWidth
              placeholder="Search..."
              value={search}
              onChange={(e) => dispatch(setSearchValue(e.target.value))}
              sx={{
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.contrastText,
                borderRadius: theme.spacing(2),
                padding: `${theme.spacing(1)} ${theme.spacing(
                  1
                )} ${theme.spacing(1)} ${theme.spacing(2)}`,
                height: "40px",
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="search">
                    <Search
                      sx={{
                        color: theme.palette.primary.contrastText,
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>
          <Grid xs={3} display="flex" justifyContent="flex-end">
            <Avatar
              alt="User profile picture"
              src="https://www.looper.com/img/gallery/the-ending-of-avatar-finally-explained/intro-1669817126.jpg"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
