import React from "react";
import { useSelector } from "react-redux";
import { SearchBar } from "../components/SearchBar";
import styles from "./Home.module.css";
import { FilmList } from "../components/FilmList";

export default function Home() {
  const isAuthenticated = useSelector((state) => state.auth.isAuth);
  const username = useSelector((state) => state.auth.username);

  return (
    <div className={styles.home}>
      {isAuthenticated && (
        <h3 style={{ color: "white" }}>Добро пожаловать, {username}!</h3>
      )}
      <SearchBar />
      <h1 className={styles.title}>Топ-20 фильмов</h1>
      <FilmList />
    </div>
  );
}
