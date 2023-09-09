import { InputBase, IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { v4 as uuid4 } from "uuid";
import { moviesApi } from "../api/MoviesApi";
import { useDebounce } from "../hooks/useDebounce";
import { SuggestsMovies } from "./SuggestMovies";
import { useOutside } from "../hooks/useOutside";
import styles from "./SearchBar.module.css";
import { usePersistentValue } from "../hooks/usePersistentValue";

const RootPaper = styled(Paper)({
  display: "flex",
  position: "relative",
  justifyContent: "center",
  width: "70%",
  backgroundColor: "#f5f5f5",
  padding: "5px",
  borderRadius: "20px",
  margin: "20px 0",
});

const Input = styled(InputBase)({
  flex: 1,
  color: "black",
  margin: "0 10px",
});

const SearchIconButton = styled(IconButton)({
  color: "black",
});

export function SearchBar() {
  const suggestsRef = useRef(null);
  const navigate = useNavigate();
  const { register, watch, handleSubmit } = useForm({
    defaultValues: {
      search: "",
    },
  });
  const { search } = watch();
  const debouncedSearch = useDebounce(search, 500);
  const [trigger, { data: movies }] = moviesApi.useLazyFetchMovieByQueryQuery();

  const [showSuggests, setShowSuggests] = useState(true);
  const userHistory = useSelector((state) => state.auth.email);
  const [searchHistory, setSearchHistory] = usePersistentValue(
    "moviesHistory",
    [],
  );

  useEffect(() => {
    if (debouncedSearch !== undefined && debouncedSearch !== "") {
      trigger({ name: debouncedSearch });
    }
  }, [debouncedSearch]);

  const clickOutside = () => {
    setShowSuggests(false);
  };

  useOutside(suggestsRef, clickOutside);

  const handleFormClick = () => {
    setShowSuggests(true);
  };

  const searchKey = uuid4();

  const searchMovie = () => {
    if (debouncedSearch !== "") {
      const uniqueKey = `${searchKey}_${debouncedSearch}`;
      const newHistory = {
        ...searchHistory,
        [userHistory]: [
          ...(searchHistory[userHistory] || []),
          { [uniqueKey]: debouncedSearch },
        ],
      };
      setSearchHistory(newHistory);
      navigate(`/search?name=${debouncedSearch}`);
    }
  };

  return (
    <RootPaper
      ref={suggestsRef}
      component="form"
      onSubmit={handleSubmit(searchMovie)}
      onClick={handleFormClick}
    >
      <Input
        placeholder="Поиск фильмов и сериалов"
        value={search}
        inputProps={{ ...register("search"), autoComplete: "off" }}
      />
      <SearchIconButton type="submit">
        <SearchIcon />
      </SearchIconButton>
      {debouncedSearch && showSuggests && movies && (
        <div className={styles.suggestContainer}>
          <SuggestsMovies movies={movies.docs} />
        </div>
      )}
    </RootPaper>
  );
}
