import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { axiosMovieDetails } from 'service/axiosAPI';

import MovieInfo from 'components/MovieInfo/MovieInfo';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const navigateBack = useNavigate();

  useEffect(() => {
    axiosMovieDetails(movieId).then(detail => {
      setMovieDetail(detail);
    });
  }, [movieId]);

  const buttonBackHandler = () => {
    navigateBack(-1);
  };

  return (
    <>
      {movieDetail && (
        <div>
          <button type="button" onClick={buttonBackHandler}>
            Go back
          </button>

          <MovieInfo data={movieDetail} />
        </div>
      )}
    </>
  );
};

export default MovieDetails;
