import React from "react";
import PropTypes from "prop-types";
import { FilmCard } from "./FilmCard";
import { useFetchMovieByIdQuery } from "../api/MoviesApi";
import { Preloader } from "./Preloader";
import styles from "./FavoriteCards.module.css";

export function FavoriteCards({ movieId, removeFromPage }) {
  const { data: movieData, isLoading } = useFetchMovieByIdQuery({ movieId });
  if (isLoading) return <Preloader />;

  return (
    <div className={styles.list}>
      <FilmCard
        img={movieData.poster.url}
        alt={movieData.name}
        name={movieData.name}
        year={movieData.year}
        rating={movieData.rating.kp}
        movieId={movieId}
        removeFromPage={removeFromPage}
      />
    </div>
  );
}

FavoriteCards.propTypes = {
  movieId: PropTypes.string.isRequired,
  removeFromPage: PropTypes.func.isRequired,
};
