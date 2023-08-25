import React from "react";
import { SearchBar } from "../components/SearchBar";
import styles from "./Home.module.css";
import { FilmList } from "../components/FilmList";

export default function Home() {
  return (
    <div className={styles.home}>
      <SearchBar />
      <h1 className={styles.title}>Топ-20 фильмов</h1>
      <FilmList />
    </div>
  );
}
