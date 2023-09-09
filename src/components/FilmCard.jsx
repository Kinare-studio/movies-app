import React from "react";
import PropTypes from "prop-types";
import styles from "./FilmCard.module.css";
import { BtnFavor } from "./BtnFavor";
import { BtnMore } from "./BtnMore";

export function FilmCard({
  img,
  alt,
  name,
  year,
  rating,
  movieId,
  removeFromPage,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <img src={img} alt={alt} />
      </div>
      <div className={styles.content}>
        <h3>{name}</h3>
        <div>Год выпуска: {year}</div>
        <div>Рейтинг: {rating}</div>
      </div>
      <div className={styles.btnContainer}>
        <BtnMore movieId={movieId} />
        <BtnFavor movieId={movieId} removeFromPage={removeFromPage} />
      </div>
    </div>
  );
}

FilmCard.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  movieId: PropTypes.string.isRequired,
  removeFromPage: PropTypes.func.isRequired,
};
