import { useState } from "react";

export function useSearchHistoryManagement(userHistory) {
  const [historyUpdated, setHistoryUpdated] = useState(false);

  const getSearchHistory = () =>
    JSON.parse(localStorage.getItem("moviesHistory")) || {};

  const moviesHistory = getSearchHistory();
  const updatedMoviesHistory = { ...moviesHistory };
  const searchArray = moviesHistory[userHistory] || [];

  const clearHistory = () => {
    delete updatedMoviesHistory[userHistory];
    localStorage.setItem("moviesHistory", JSON.stringify(updatedMoviesHistory));
    setHistoryUpdated(true);
  };

  const clearHistoryItem = (search) => {
    const updatedUserSearches = searchArray.filter(
      (item) => Object.keys(item)[0].toString() !== search.toString(),
    );
    updatedMoviesHistory[userHistory] = updatedUserSearches;

    localStorage.setItem("moviesHistory", JSON.stringify(updatedMoviesHistory));
    setHistoryUpdated(!historyUpdated);
  };

  return { clearHistory, clearHistoryItem, getSearchHistory };
}
