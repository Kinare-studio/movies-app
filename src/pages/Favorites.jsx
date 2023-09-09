import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Preloader } from "../components/Preloader";
import { FavoriteCards } from "../components/FavoriteCards";
import styles from "./Favorites.module.css";
import { getFavoriteMoviesData } from "../utilities/getFavoriteMoviesData";

export default function FavoriteList() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const username = useSelector((state) => state.auth.username);
  const userEmail = useSelector((state) => state.auth.email);

  const removeFromPage = (movieId) => {
    setFavoriteMovies((prev) => prev.filter((id) => id !== movieId));
  };

  useEffect(() => {
    const favoriteMoviesData = getFavoriteMoviesData();
    const userFavorites = favoriteMoviesData[userEmail] || [];
    setFavoriteMovies(userFavorites);
    setIsLoading(false);
  }, [userEmail]);

  if (isLoading) return <Preloader />;

  const favoriteMessage = favoriteMovies.length
    ? `${username}, Вы добавили в избранное следующие фильмы:`
    : `${username}, в вашем списке пока нет избранных фильмов`;

  return (
    <div className={styles.mainContainer}>
      <main>
        <h3 style={{ color: "white" }}>{favoriteMessage}</h3>
        <div className={styles.movieContainer}>
          {favoriteMovies.map((movieId) => (
            <FavoriteCards
              key={movieId}
              movieId={String(movieId)}
              removeFromPage={removeFromPage}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
