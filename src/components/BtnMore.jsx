import React from "react";
import Button from "@mui/material/Button";

export function BtnMore() {
  return (
    <Button
      sx={{
        fontSize: "10px",
      }}
      color="secondary"
      variant="outlined"
      size="mini"
    >
      Подробнее
    </Button>
  );
}
