/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./SearchHistory.module.css";

export function SearchHistory() {
  const userHistory = useSelector((state) => state.auth.email) || "";
  const navigate = useNavigate();
  const [historyUpdated, setHistoryUpdated] = useState(false);

  const handleHistoryClick = (search) => {
    navigate(`/search?name=${search}`);
  };

  const moviesHistory = JSON.parse(localStorage.getItem("moviesHistory")) || {};
  const searchArray = moviesHistory[userHistory] || [];

  const clearHistory = () => {
    const updatedMoviesHistory = { ...moviesHistory };
    delete updatedMoviesHistory[userHistory];
    localStorage.setItem("moviesHistory", JSON.stringify(updatedMoviesHistory));
    setHistoryUpdated(true);
  };

  useEffect(() => {}, [historyUpdated]);

  const keysOfSearches = searchArray.map((item) => Object.keys(item)) || [];
  const userSearches = searchArray.map((item) => Object.values(item)) || [];

  const clearHistoryItem = (search) => {
    const updatedMoviesHistory = { ...moviesHistory };

    const updatedUserSearches = searchArray.filter(
      (item) => Object.keys(item)[0].toString() !== search.toString(),
    );
    updatedMoviesHistory[userHistory] = updatedUserSearches;

    localStorage.setItem("moviesHistory", JSON.stringify(updatedMoviesHistory));
    setHistoryUpdated(!historyUpdated);
    console.log(`вы удалили ${search}`);
  };

  if (searchArray.length > 0 && userSearches.length > 0) {
    return (
      <div className={styles.container}>
        <h3>История поиска</h3>
        <ul className={styles.itemsContainer}>
          {userSearches.map((search, index) => (
            <li key={keysOfSearches[index]}>
              <a
                className={styles.link}
                href={`/search?name=${search}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleHistoryClick(search);
                }}
              >
                {search}
              </a>
              <IconButton
                aria-label="delete"
                size="small"
                onClick={() => clearHistoryItem(keysOfSearches[index])}
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </li>
          ))}
        </ul>
        <Button
          sx={{
            marginTop: "40px",
            fontSize: "12px",
            textDecoration: "none",
            color: "white",
          }}
          color="secondary"
          variant="outlined"
          size="mini"
          onClick={clearHistory}
        >
          Очистить историю
        </Button>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <h3>У вас пока нет истории поиска...</h3>
    </div>
  );
}
