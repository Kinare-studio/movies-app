// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { AppRoutes } from "./routes/AppRoutes";
// import { Header } from "./components/Header";
// import { useFetchAllMoviesQuery } from "./api/MoviesApi";

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

// export function App() {
//   const { data, isLoading } = useFetchAllMoviesQuery({ year: 2023 });

//   if (isLoading) return <p>Loading...</p>;

//   const top20Movies = [...data.docs]
//     .sort((a, b) => b.rating.kp - a.rating.kp)
//     .slice(0, 20);

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Router>
//         <Header />
//         <div>
//           <ul>
//             {top20Movies.map((movie) => (
//               <li key={movie.id}>
//                 <h2>{movie.name}</h2>
//                 <p>{movie.description}</p>
//                 <img src={movie.poster.url} alt={movie.name} />
//                 {/* Дополнительная информация о фильме */}
//                 <p>Year: {movie.year}</p>
//                 <p>Rating: {movie.rating.kp}</p>
//                 {/* ... другие свойства, которые вы хотите отобразить */}
//               </li>
//             ))}
//           </ul>
//         </div>
//         ;
//         <AppRoutes />
//       </Router>
//     </ThemeProvider>
//   );
// }
