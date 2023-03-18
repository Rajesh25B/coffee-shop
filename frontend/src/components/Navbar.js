import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  ListItemButton,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import EmojiFoodBeverageTwoToneIcon from "@mui/icons-material/EmojiFoodBeverageTwoTone";
import { Notifications } from "@mui/icons-material";
import { useState } from "react";
import CoffeeIcon from "@mui/icons-material/Coffee";
import { useCookies } from "react-cookie";

const CustomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

// search bar

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "15px",
  paddingTop: "5px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["jwt_access_token"]);

  const handleClick = () => {
    cookies.remove(cookies.jwt_access_token);
  };

  return (
    <AppBar position="sticky">
      <CustomToolbar>
        <Typography
          variant="h6"
          sx={{ display: { xs: "none", sm: "block", md: "block" } }}
        >
          <ListItemButton to="/">Coffee Shop</ListItemButton>
        </Typography>

        <EmojiFoodBeverageTwoToneIcon
          sx={{ display: { xs: "block", sm: "none" } }}
        />
        {/* <SearchAppBar /> */}
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <CoffeeIcon onClick={() => setOpen(true)} />
          {/* <Avatar src= onClick={() => setOpen(true)} /> */}
        </Icons>
        {/* mobile version (gets hit at low screens) */}
        <UserBox>
          <Avatar
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            onClick={() => setOpen(true)}
          />
          <Typography variant="span">Rajesh</Typography>
        </UserBox>
      </CustomToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>
          <ListItemButton to="/register">Register</ListItemButton>
        </MenuItem>
        <MenuItem>
          {/* {cookies.jwt_access_token === "" ? (
            <ListItemButton to="/login">Login</ListItemButton>
          ) : (
            <ListItemButton to="/login" onClick={handleClick}>
              Logout
            </ListItemButton>
          )} */}
          <ListItemButton to="/login">Login</ListItemButton>
        </MenuItem>
        <MenuItem>
          <ListItemButton to="/contact">Contact</ListItemButton>
        </MenuItem>
      </Menu>
    </AppBar>
  );
};
