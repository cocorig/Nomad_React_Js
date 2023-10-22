import React from "react";
import Movie from "../components/Movie";
import { dummy } from "../MovieDummy";
import { PageContainer } from "../styles/PageContainer";
import { MoviesContainer } from "../styles/Movie";
export default function Movies() {
  return (
    <MoviesContainer>
      {dummy.results.map((item) => {
        return (
          <Movie
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
          />
        );
      })}
    </MoviesContainer>
  );
}
