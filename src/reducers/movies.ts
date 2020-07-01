import type { MoviesLoaded } from "../actions";

const movies = function (state: Movie[] = [], action: MoviesLoaded): Movie[] {
  console.log(action.type, action);

  switch (action.type) {
    case "MOVIES-LOADED":
      return action.movies;

    default:
      return state;
  }
};

export default movies;
