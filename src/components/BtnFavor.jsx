/* eslint-disable no-console */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";

export function BtnFavor({ movieId, movieData }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const isAuthorized = useSelector((state) => state.auth.isAuth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(addFavorite({ movieId, movieData }));
  };

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite({ movieId }));
  };

  const onClick = () => {
    if (isAuthorized) {
      if (isFavorite) {
        handleRemoveFavorite();
      } else {
        handleAddFavorite();
      }
      setIsFavorite(!isFavorite);
    } else {
      navigate("/login");
    }
  };

  const buttonText = isFavorite ? "В избранном" : "В избранное";
  const buttonStyle = isFavorite
    ? {
        fontSize: "10px",
        textDecoration: "none",
        color: "secondary",
        variant: "outlined",
      }
    : {
        color: "white",
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        fontSize: "10px",
        variant: "contained",
      };

  return (
    <div>
      {isAuthorized ? (
        <Button sx={buttonStyle} size="mini" onClick={onClick}>
          {buttonText}
        </Button>
      ) : (
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button sx={buttonStyle} size="mini">
            {buttonText}
          </Button>
        </Link>
      )}
    </div>
  );
}

BtnFavor.propTypes = {
  movieId: PropTypes.string.isRequired,
  movieData: PropTypes.shape({
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
  }).isRequired,
};
