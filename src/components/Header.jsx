import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

import { PrivateHeader } from "./PrivateHeader";
import { ColorProvider } from "../context/ColorContext";

export function Header() {
  const isAuthorized = useSelector((state) => state.auth.isAuth);

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginX: "40px",
        }}
      >
        <IconButton
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: "20px",
          }}
        >
          <Avatar
            sx={{
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              marginRight: "10px",
            }}
          >
            <OndemandVideoIcon />
          </Avatar>
          <Typography variant="h6" component="div">
            Movies App
          </Typography>
        </IconButton>
        {!isAuthorized ? (
          <Box sx={{ marginLeft: "auto" }}>
            <Button
              color="inherit"
              component={Link}
              to="/login"
              variant="outlined"
            >
              Log In
            </Button>
            <Button
              component={Link}
              to="/signup"
              sx={{
                color: "white",
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                marginLeft: "10px",
              }}
              variant="contained"
            >
              Sign Up
            </Button>
          </Box>
        ) : (
          <ColorProvider>
            <PrivateHeader />
          </ColorProvider>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
