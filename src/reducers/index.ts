import { combineReducers } from "redux";
import movies from "./movies";
import currentMovie from "./currentMovie";

export default combineReducers({
  movies,
  currentMovie,
});

export type RootState = {
  movies: ReturnType<typeof movies>;
  currentMovie: ReturnType<typeof currentMovie>;
};
