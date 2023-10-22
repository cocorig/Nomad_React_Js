import React from "react";
import { useNavigate } from "react-router-dom";

import {
  MovieContainer,
  MovieImage,
  MovieInfo,
  MovieTitle,
  MovieInfoText,
} from "../styles/Movie";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie(props) {
  const navigate = useNavigate(); // 페이지 이동

  const onClickMovieItem = () => {
    navigate(`/movie/${props.title}`, {
      state: props,
    });
  };
  return (
    <MovieContainer onClick={onClickMovieItem}>
      <MovieImage src={IMG_BASE_URL + props.poster_path} alt="영화포스터" />
      <MovieInfo>
        <MovieTitle>{props.title}</MovieTitle>
        <MovieInfoText>{props.vote_average}</MovieInfoText>
      </MovieInfo>
    </MovieContainer>
  );
}
