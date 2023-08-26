import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FilmCard } from "./FilmCard";
import styles from "./FilmList.module.css";
import { useFetchAllMoviesQuery } from "../api/MoviesApi";
import { Preloader } from "./Preloader";

export function FilmList() {
  const { data, isLoading } = useFetchAllMoviesQuery({ limit: 20 });

  if (isLoading) return <Preloader />;

  const top20Movies = [...data.docs]
    .sort((a, b) => b.rating.kp - a.rating.kp)
    .map((movie) => ({ ...movie, key: uuidv4() }));

  return (
    <div className={styles.list}>
      {top20Movies.map((movie) => (
        <FilmCard
          id={movie.id}
          key={movie.key}
          img={movie.poster.url}
          alt={movie.name}
          name={movie.name}
          description={movie.description}
          year={movie.year}
          rating={movie.rating.kp}
        />
      ))}
    </div>
  );
}
