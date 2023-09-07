import { Link, useLocation } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { Button, Box } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { logoutUser } from "../redux/authSlice";
import { useColor } from "../context/ColorContext";

export function PrivateHeader() {
  const dispatch = useDispatch();
  const { color, setColor } = useColor();
  const { pathname } = useLocation();
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleColorChange = () => {
    setColor("red");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <BottomNavigation
        sx={{ marginLeft: "auto", backgroundColor: "transparent" }}
        value="recents"
      >
        <BottomNavigationAction
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
          component={Link}
          to="/history"
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={
            <FavoriteIcon
              style={{ color: pathname === "/favorites" && color }}
            />
          }
          component={Link}
          to="/favorites"
          onClick={handleColorChange}
        />
      </BottomNavigation>
      <Button
        onClick={handleLogout}
        sx={{
          color: "white",
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          marginLeft: "10px",
        }}
        variant="contained"
      >
        Log Out
      </Button>
    </Box>
  );
}
