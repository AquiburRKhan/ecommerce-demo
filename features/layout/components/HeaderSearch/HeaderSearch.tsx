import { Search } from "@mui/icons-material";
import { IconButton, InputAdornment, InputBase } from "@mui/material";
import theme from "@/theme";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setSearchValue } from "@/features/products/slice/search";

const HeaderSearch = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search);

  return (
    <InputBase
      fullWidth
      placeholder="Search..."
      value={search}
      onChange={(e) => dispatch(setSearchValue(e.target.value))}
      sx={{
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
        borderRadius: theme.spacing(2),
        padding: `${theme.spacing(1)} ${theme.spacing(1)} ${theme.spacing(
          1
        )} ${theme.spacing(2)}`,
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
  );
};

export default HeaderSearch;
