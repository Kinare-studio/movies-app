import React from "react";
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

export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ marginX: "40px" }}>
          <IconButton
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
          <Box sx={{ marginLeft: "auto" }}>
            <Button color="inherit" variant="outlined">
              Log In
            </Button>
          </Box>
          <Button
            sx={{
              color: "white",
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              marginLeft: "10px",
            }}
            variant="contained"
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
