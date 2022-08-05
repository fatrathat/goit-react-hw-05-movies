import { useState, useEffect } from 'react';
import { axiosTrendingMovies } from 'service/axiosAPI';

import MovieList from 'components/MoviesList/MovieList';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState(null);

  useEffect(() => {
    axiosTrendingMovies().then(({ results }) => {
      setTrendMovies(results);
    });
  }, []);

  return <>{trendMovies && <MovieList data={trendMovies} />}</>;
};

export default Home;
