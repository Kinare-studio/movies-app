import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { dark } from "@mui/material/styles/createPalette";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { setIsAuth } from "../redux/authSlice";

export default function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [loginError, setLoginError] = useState(false);

  const [storedUsers] = useLocalStorage("users", []);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { email, password } = data;

    const registeredUser = storedUsers.find(
      (user) => user.email === email && user.password === password,
    );

    if (registeredUser) {
      dispatch(setIsAuth({ isAuth: true, username: registeredUser.firstname }));
      navigate("/");
    } else {
      setLoginError(true);
    }
  };

  return (
    <ThemeProvider theme={dark}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              marginRight: "10px",
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          {loginError && (
            <Typography
              sx={{
                mt: 2,
                color: "red",
              }}
              variant="body2"
            >
              Неверный логин или пароль. Пожалуйста, попробуйте снова.
            </Typography>
          )}
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{ ...register("email", { required: true }) }}
            />
            {errors.email && (
              <Typography variant="body2" color="error">
                Это поле обязательное для заполнения*
              </Typography>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{ ...register("password", { required: true }) }}
            />
            {errors.password && (
              <Typography variant="body2" color="error">
                Это поле обязательное для заполнения*
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                color: "white",
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              }}
            >
              Log In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link sx={{ color: "#FE6B8B" }} href="/signup" variant="body2">
                  Еще не зарегистрированы?
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
