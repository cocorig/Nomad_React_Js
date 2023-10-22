import styled from "styled-components";

// .movies-container
const MoviesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

// .movie-container
const MovieContainer = styled.div`
  width: ${(props) => (props.isLarge ? "500px" : "250px")};
  margin: 16px;
  background-color: #373b69;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

// .movie-container img
const MovieImage = styled.img`
  max-width: 100%;
`;

// .movie-info
const MovieInfo = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

// .movie-info h4
const MovieTitle = styled.h4`
  margin: 0;
`;

// .movie-info span
const MovieInfoText = styled.span`
  margin-left: 3px;
`;

export {
  MoviesContainer,
  MovieContainer,
  MovieImage,
  MovieInfo,
  MovieTitle,
  MovieInfoText,
};
