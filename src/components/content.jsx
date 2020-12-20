import React, { useEffect, useReducer } from "react";
import "./assets/styles/Contents.css";
import { initialState, reducer } from "../store/reducers/reducer";
import { fetchMovies } from "../api/api";
import Movie from "./movie";

const Content = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetchMovies().then((jsonResponse) => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: jsonResponse.Search,
      });
    });
  }, []);
  const { movies, errorMessage, loading } = state;

  return (
    <div className="wrapper">
      <div className="cards">
        {loading && <span>loading...</span>}

        {errorMessage && <span>{errorMessage}</span>}

        {movies &&
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Content;
