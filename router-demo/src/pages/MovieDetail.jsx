import React from "react";
import { PageContainer } from "../styles/PageContainer";
import { useLocation, useParams } from "react-router-dom";
import { IMG_BASE_URL } from "../components/Movie";

import {
  MovieContainer,
  MovieImage,
  MovieInfo,
  MovieTitle,
  MovieInfoText,
} from "../styles/Movie";
export default function MovieDetail() {
  // console.log(useParams()); // 경로에 있는 값을 가져옴
  // console.log(useLocation()); // 내가 보낸 useLocation에 state값을 얻음
  const { title } = useParams();
  const { state } = useLocation();

  console.log(title, state);
  return (
    <PageContainer row>
      <MovieContainer isLarge>
        <MovieImage
          src={IMG_BASE_URL + state.poster_path}
          alt="영화 포스터 이미지"
        />
      </MovieContainer>

      <MovieInfo>
        <MovieTitle>{title}</MovieTitle>
        <MovieInfoText>{state.vote_average}</MovieInfoText>
      </MovieInfo>
    </PageContainer>
  );
}
