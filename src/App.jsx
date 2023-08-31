import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ErrorBoundary } from "react-error-boundary";
import { AppRoutes } from "./routes/AppRoutes";
import { Header } from "./components/Header";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <ErrorBoundary>
        <Router>
          <Header />
          <AppRoutes />
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}
