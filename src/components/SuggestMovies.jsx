import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./SuggestMovie.module.css";

export function SuggestsMovies({ movies }) {
  return (
    <>
      {movies.slice(0, 5).map((item) => {
        return (
          <Link
            key={item.id}
            to={`movie/${item.id}`}
            style={{ textDecoration: "none" }}
          >
            <div className={styles.suggest}>
              {item.poster && <img src={item.poster.previewUrl} alt="poster" />}
              {item.name}
            </div>
          </Link>
        );
      })}
    </>
  );
}

SuggestsMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      poster: PropTypes.shape({
        previewUrl: PropTypes.string,
      }),
    }),
  ).isRequired,
};
