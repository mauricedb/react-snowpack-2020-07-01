import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { RootState } from '../reducers';

import MovieRow from './MovieRow';
import Loading from './Loading';
import { loadMovies } from '../actions';

const MovieList: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);
  const movies = useSelector((state: RootState) => state.movies);

  if (!movies) {
    return <Loading />;
  }

  const rows = movies.map((movie) => <MovieRow key={movie.id} movie={movie} />);

  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Movie Title</th>
          <th>Vote</th>
          <th />
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default MovieList;
