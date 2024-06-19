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
import HeaderSearch from "../HeaderSearch/HeaderSearch";

const Header = () => {
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
          <Grid xs={8} sm={6} md={3}>
            <Typography
              variant="body1"
              fontSize="1.3rem"
              fontWeight="bold"
              color="primary.contrastText"
            >
              E-Commerce
            </Typography>
          </Grid>
          <Grid display={{ xs: "none", md: "flex" }} md={6}>
            <HeaderSearch />
          </Grid>
          <Grid xs={4} sm={6} md={3} display="flex" justifyContent="flex-end">
            <Avatar
              alt="User profile picture"
              src="https://www.looper.com/img/gallery/the-ending-of-avatar-finally-explained/intro-1669817126.jpg"
            />
          </Grid>
        </Grid>
        <Grid
          display={{ xs: "flex", md: "none" }}
          my={theme.spacing(1)}
          justifyContent="center"
        >
          <HeaderSearch />
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
