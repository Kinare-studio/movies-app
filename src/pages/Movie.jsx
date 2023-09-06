import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Movie.module.css";
import { moviesApi } from "../api/MoviesApi";
import { Preloader } from "../components/Preloader";
import { BtnFavor } from "../components/BtnFavor";

export default function Movie() {
  const { id: movieId } = useParams();
  const {
    data: movie,
    isLoading,
    isError,
  } = moviesApi.useFetchMovieByIdQuery({
    movieId,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isError) {
    return <p>Oooops! Что-то пошло не так!</p>;
  }

  if (isLoading || !movie) {
    return <Preloader />;
  }

  const backgroundImageStyle = {
    backgroundImage: `url(${movie.backdrop.url})`,
  };

  const posterStyle = {
    backgroundImage: `url(${movie.poster.url})`,
  };

  const budget =
    movie.budget &&
    movie.budget.value !== undefined &&
    movie.budget.value !== null
      ? `Бюджет: ${movie.budget.value.toLocaleString()} ${
          movie.budget.currency
        }`
      : " ";

  return (
    <div className={styles.movieContainer}>
      <div className={styles.backgroundImage} style={backgroundImageStyle} />

      <div className={styles.mainContent}>
        <div className={styles.poster} style={posterStyle} />

        <div className={styles.description}>
          <div className={styles.rating}>
            <p className={styles.kp}>{movie.rating.kp}</p>
            <p className={styles.votes}>
              {movie.votes.kp.toLocaleString()} оценок
            </p>
          </div>
          <h1>{movie.name}</h1>

          <p>{movie.shortDescription}</p>
          <p>Год производства: {movie.year}</p>
          <p>
            <span> Жанры: </span>
            <span>{movie.genres.map((genre) => genre.name).join(", ")}</span>
          </p>
          <p>
            <span> Актеры: </span>
            <span>{movie.actors.map((actor) => actor.name).join(", ")}</span>
          </p>
          <p>
            <span> Режиссеры: </span>
            <span>
              {movie.directors.map((director) => director.name).join(", ")}
            </span>
          </p>

          <p>{budget}</p>
          <div className={styles.footer}>
            <BtnFavor movieId={String(movie.id)} />
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <p>{movie.description}</p>
      </div>
    </div>
  );
}
