import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "../reducers";

import Loading from "./Loading";
import TextInput from "./TextInput";
import { currentMoviePropChanged, loadMovie } from "../actions";

const MovieEditor: React.FC = () => {
  const { id } = useParams();
  const { push } = useHistory();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadMovie(id));
  }, [dispatch, id]);
  const movie = useSelector((state: RootState) => state.currentMovie);

  const onChange = React.useCallback(
    (prop, value) => {
      dispatch(currentMoviePropChanged(prop, value));
    },
    [dispatch]
  );

  async function saveMovie() {
    const response = await fetch(
      `https://the-problem-solver-sample-data.azurewebsites.net/popular-movies/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "put",
        body: JSON.stringify(movie),
      }
    );
    if (response.ok) {
      push("/movies");
    }
  }

  if (!movie) {
    return <Loading />;
  }

  return (
    <form>
      <TextInput
        label="Title"
        value={movie.title}
        onChange={(e) => onChange("title", e.target.value)}
      />
      <div className="form-group">
        <label>Overview</label>
        <textarea
          className="form-control"
          value={movie.overview}
          rows={5}
          onChange={(e) => onChange("overview", e.target.value)}
        />
      </div>
      <TextInput
        label="Vote"
        value={movie.vote_average}
        onChange={(e) => onChange("vote_average", +e.target.value)}
      />
      <TextInput
        label="Release date"
        value={movie.release_date}
        onChange={(e) => onChange("release_date", e.target.value)}
      />
      <div className="form-group">
        <img
          src={`//image.tmdb.org/t/p/w185${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      <div className="btn-group">
        <button onClick={saveMovie} type="button" className="btn btn-primary">
          Save
        </button>
        <Link to={`/movies`} className="btn btn-danger">
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default MovieEditor;
