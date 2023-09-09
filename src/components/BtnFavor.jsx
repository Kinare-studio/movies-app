import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { usePersistentValue } from "../hooks/usePersistentValue";
import { toggleFavoriteMovie } from "../utilities/toggleFavoriteMovies";

export function BtnFavor({ movieId, removeFromPage }) {
  const isAuthorized = useSelector((state) => state.auth.isAuth);
  const [isFavorite, setIsFavorite] = useState(false);
  const [storedMovies, setStoredMovies] = usePersistentValue(
    "favoriteMoviesId",
    [],
  );
  const moviesKey = useSelector((state) => state.auth.email);

  const onClick = () => {
    toggleFavoriteMovie(
      movieId,
      moviesKey,
      storedMovies,
      setStoredMovies,
      isFavorite,
      (newIsFavorite) => {
        setIsFavorite(newIsFavorite);
        if (!newIsFavorite) {
          removeFromPage(movieId); // добавила
        }
      },
    );
  };

  useEffect(() => {
    const storedIsFavorite = localStorage.getItem(`isFavorite_${movieId}`);
    if (storedIsFavorite) {
      setIsFavorite(storedIsFavorite === "true");
    }
  }, [movieId, isFavorite]);

  useEffect(() => {
    const userEmail = moviesKey;
    const userFavorites = storedMovies[userEmail] || [];
    const isMovieFavorite = userFavorites.includes(movieId);

    setIsFavorite(isMovieFavorite);
  }, [movieId, storedMovies, moviesKey]);

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
  removeFromPage: PropTypes.func.isRequired,
};
