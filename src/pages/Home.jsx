import React from "react";
import { SearchBar } from "../components/SearchBar";
import { FilmList } from "../components/FilmList";
import "../css/main.css";

export function Home() {
  // const url = "https://api.kinopoisk.dev/v1.3/movie";
  // const apiKey = "RT1MBCK-0C94DBW-H12TZGT-PDZ2410";

  return (
    <div className="home">
      <SearchBar />
      <h1 className="mainTitle">Топ-20 фильмов</h1>
      <FilmList />
    </div>
  );
}
