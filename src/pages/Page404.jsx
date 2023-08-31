import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "black",
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: "white", marginBottom: "40px" }}>
        Упс! Что-то пошло не так. Страница устарела, была удалена или не
        существовала вовсе.
      </Typography>
      <Button
        component={Link}
        to="/"
        sx={{
          color: "white",
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          marginLeft: "10px",
        }}
        variant="contained"
      >
        Back Home
      </Button>
    </Box>
  );
}
