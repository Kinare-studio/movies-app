import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Preloader } from "../components/Preloader";

const importPage = (pageName) => lazy(() => import(`../pages/${pageName}`));

const Home = importPage("Home");
const Login = importPage("Login");
const Signup = importPage("Signup");
const Movie = importPage("Movie");
const Search = importPage("Search");
const Favorites = importPage("Favorites");
const History = importPage("History");
const Page404 = importPage("Page404");

export function AppRoutes() {
  return (
    <Suspense fallback={<Preloader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/history" element={<History />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Suspense>
  );
}
