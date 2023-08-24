import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const preloaderStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "white",
};

export function Preloader() {
  return (
    <div style={preloaderStyles}>
      <CircularProgress color="primary" disableShrink />
    </div>
  );
}
