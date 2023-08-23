import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export function FilmCard({ img, title }) {
  console.log(img);
  return (
    <Card
      sx={{ maxWidth: 300, marginBottom: "40px", backgroundColor: "white" }}
    >
      <CardMedia
        sx={{ height: "300px", width: "300px", margin: "0 20px 20px 0" }}
        image={img}
        title={title}
      />
      <CardContent>
        <Typography
          sx={{ color: "black", marginBottom: "20px" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" />
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <Button color="secondary" variant="outlined" size="small">
          Подробнее
        </Button>
        <Button
          sx={{
            color: "white",
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            marginLeft: "10px",
          }}
          variant="contained"
          size="small"
        >
          в избранное
        </Button>
      </CardActions>
    </Card>
  );
}

FilmCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
