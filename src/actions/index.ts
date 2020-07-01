import type { AnyAction, Dispatch } from "redux";

export const moviesLoaded = (movies: Movie[]): AnyAction => {
  return {
    type: "MOVIES-LOADED" as "MOVIES-LOADED",
    movies,
  };
};

export type MoviesLoaded = ReturnType<typeof moviesLoaded>;

export const movieLoaded = (movie: Movie): AnyAction => {
  return {
    type: "MOVIE-LOADED" as "MOVIE-LOADED",
    movie,
  };
};

export type MovieLoaded = ReturnType<typeof movieLoaded>;

export const currentMoviePropChanged = (
  prop: keyof Movie,
  value: string | number
): AnyAction => {
  return {
    type: "MOVIE-PROP-CHANGED" as "MOVIE-PROP-CHANGED",
    prop,
    value,
  };
};

export type CurrentMoviePropChanged = ReturnType<
  typeof currentMoviePropChanged
>;

export const loadMovies = () => async (dispatch: Dispatch) => {
  const response = await fetch(
    "https://the-problem-solver-sample-data.azurewebsites.net/popular-movies"
  );

  dispatch(moviesLoaded(await response.json()));
};

export const loadMovie = (id: number) => async (dispatch: Dispatch) => {
  const response = await fetch(
    `https://the-problem-solver-sample-data.azurewebsites.net/popular-movies/${id}`
  );

  dispatch(movieLoaded(await response.json()));
};
