import * as React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [registrationStatus, setRegistrationStatus] = useState("");

  const [storedUsers, setStoredUsers] = useLocalStorage("users", []);

  const onSubmit = (data) => {
    const registeredUser = storedUsers.find(
      (user) => user.email === data.email,
    );
    if (registeredUser) {
      setRegistrationStatus(
        `Пользователь с логином ${data.email} уже зарегистрирован`,
      );
    } else {
      const newUser = { email: data.email, password: data.password };
      setStoredUsers((prevUsers) => [...prevUsers, newUser]);
      navigate("/");
    }
  };

  const emailErrorMessage =
    errors.email && errors.email.type === "required"
      ? "Это поле обязательно для заполнения."
      : "Неправильный формат email.";

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
          <Typography component="h1" variant="h5" sx={{ marginBottom: 2 }}>
            Sign up
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  InputProps={{
                    ...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    }),
                  }}
                  error={!!errors.email}
                />
                {errors.email && (
                  <Typography variant="body2" color="error">
                    {emailErrorMessage}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  InputProps={{ ...register("password", { required: true }) }}
                  error={!!errors.password}
                />
                {errors.password && (
                  <Typography variant="body2" color="error">
                    Это поле обязательно для заполнения.
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Button
              id="btn"
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 4,
                mb: 2,
                color: "white",
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              }}
            >
              Sign Up
            </Button>
            {registrationStatus &&
              !registrationStatus.includes("successfully") && (
                <Typography variant="body2" color="error">
                  {registrationStatus}
                </Typography>
              )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link sx={{ color: "#FE6B8B" }} href="/login" variant="body2">
                  Уже зарегистрированы?
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
