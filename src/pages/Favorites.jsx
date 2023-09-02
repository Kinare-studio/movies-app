import React from "react";
import { useSelector } from "react-redux";
import styles from "./Favorites.module.css";
import { FilmCard } from "../components/FilmCard";

export default function Favorites() {
  const username = useSelector((state) => state.auth.username);
  const favoriteMovies = useSelector((state) => state.favorites.favoriteMovies);
  const favoriteMoviesArray = Object.values(favoriteMovies);

  return (
    <div className={styles.mainContainer}>
      <main>
        <h3 style={{ color: "white" }}>
          {username}, Вы добавили в избранное следующие фильмы:
        </h3>
        <div className={styles.movieContainer}>
          {favoriteMoviesArray.map((item) => (
            <FilmCard
              id={item.id}
              key={item.id}
              alt={item.name}
              img={item.img}
              name={item.name}
              rating={item.rating}
              description={item.description}
              year={item.year}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
