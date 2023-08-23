import React from "react";
import { InputBase, IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

const RootPaper = styled(Paper)({
  display: "flex",
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
});

const SearchIconButton = styled(IconButton)({
  color: "black",
});

export function SearchBar() {
  return (
    <RootPaper component="form">
      <Input placeholder="Поиск фильмов и сериалов" />
      <SearchIconButton>
        <SearchIcon />
      </SearchIconButton>
    </RootPaper>
  );
}
