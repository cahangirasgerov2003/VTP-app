import React, { useState } from "react";
import "./search.css";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const searchFood = (e) => {
    e.preventDefault();
    navigate("/search?q=" + inputValue);
    document.querySelector("#searchInput").value = "";
  };

  return (
    <form onSubmit={searchFood}>
      <input
        type="search"
        name="searchInput"
        id="searchInput"
        placeholder="Search by name..."
        className="form-control"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </form>
  );
};

export default Search;
