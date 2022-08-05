import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { axiosSearchMovies } from 'service/axiosAPI';

import MovieList from 'components/MoviesList/MovieList';

const Movies = () => {
  const [searchParams, setSerchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('inputQuery') || '';

  const submitHandler = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.query.value;
    if (searchQuery.trim() === '') {
      alert('Input query!');
      return;
    }

    setSerchParams({ inputQuery: searchQuery });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    axiosSearchMovies(query).then(({ results }) => {
      setMovies(results);
    });
  }, [query]);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" name="query" placeholder="Search movies" />
        <button type="submit">Search</button>
      </form>

      <MovieList data={movies} />
    </div>
  );
};
export default Movies;
