import React from "react";
import Button from "@mui/material/Button";

export function BtnFavor() {
  return (
    <Button
      sx={{
        color: "white",
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        fontSize: "10px",
      }}
      variant="contained"
      size="mini"
    >
      в избранное
    </Button>
  );
}
