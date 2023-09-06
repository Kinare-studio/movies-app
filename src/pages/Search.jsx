import React from "react";
import { useSearchParams } from "react-router-dom";
import { moviesApi } from "../api/MoviesApi";
import { FilmCard } from "../components/FilmCard";
import { Preloader } from "../components/Preloader";
import { SearchBar } from "../components/SearchBar";
import styles from "./Search.module.css";

export default function Search() {
  const [searchParams] = useSearchParams();
  const {
    data: movies,
    isFetching,
    isLoading,
  } = moviesApi.useFetchMovieByQueryQuery({
    name: searchParams.get("name"),
    limit: 10,
  });

  const isDataReady = isLoading || isFetching;
  const showResults = !isDataReady && movies?.docs;

  return (
    <>
      {isDataReady && <Preloader />}
      <div className={styles.mainContainer}>
        <main>
          <SearchBar />
          {showResults && (
            <>
              <h2>
                Результаты поиска по запросу{" "}
                <span>{searchParams.get("name")}</span>:{" "}
              </h2>
              <div className={styles.movieContainer}>
                {movies.docs.map((item) => (
                  <FilmCard
                    id={item.id}
                    key={item.id}
                    img={item.poster.url}
                    alt={item.name}
                    name={item.name}
                    description={item.description}
                    year={item.year}
                    rating={item.rating.kp}
                  />
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
}
