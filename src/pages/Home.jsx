import React from "react";
import { SearchBar } from "../components/SearchBar";
import { FilmList } from "../components/FilmList";
import "../css/main.css";

export function Home() {

  return (
    <div className="home">
      <SearchBar />
      <h1 className="mainTitle">Топ-20 фильмов</h1>
      <FilmList />
    </div>
  );
}
