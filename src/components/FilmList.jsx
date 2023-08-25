import React from "react";
import { FilmCard } from "./FilmCard";
import styles from "./FilmList.module.css";
import { useFetchAllMoviesQuery } from "../api/MoviesApi";
import { Preloader } from "./Preloader";

export function FilmList() {
  const { data, isLoading } = useFetchAllMoviesQuery({ year: 2023 });

  if (isLoading) return <Preloader />;

  const top20Movies = [...data.docs]
    .sort((a, b) => b.rating.kp - a.rating.kp)
    .slice(0, 20);
  console.log("top20Movies", top20Movies[1].title);

  return (
    <div className={styles.list}>
      {top20Movies.map((movie) => (
        <FilmCard
          key={movie.poster.url}
          img={movie.poster.url}
          title={movie.title}
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
