import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function BtnMore({ movieId }) {
  return (
    <Link to={`/movie/${movieId}`} style={{ textDecoration: "none" }}>
      <Button
        sx={{
          fontSize: "10px",
          textDecoration: "none",
        }}
        color="secondary"
        variant="outlined"
        size="mini"
      >
        Подробнее
      </Button>
    </Link>
  );
}
BtnMore.propTypes = {
  movieId: PropTypes.string.isRequired,
};
