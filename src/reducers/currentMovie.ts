import type { MovieLoaded, CurrentMoviePropChanged } from "../actions";

const currentMovie = function (
  state: Movie | null = null,
  action: MovieLoaded | CurrentMoviePropChanged
): Movie | null {
  console.log(action.type, action);

  switch (action.type) {
    case "MOVIE-LOADED":
      return action.movie;

    case "MOVIE-PROP-CHANGED":
      return {
        ...state,
        [action.prop]: action.value,
      } as Movie;

    default:
      return state;
  }
};

export default currentMovie;
