import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { axiosMovieDetails } from 'service/axiosAPI';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const navigateBack = useNavigate();

  useEffect(() => {
    axiosMovieDetails(movieId).then(detail => {
      setMovieDetail(detail);
    });
  }, [movieId]);
  console.log(movieDetail);

  const buttonBackHandler = () => {
    navigateBack(-1);
  };

  return (
    <div>
      <button type="button" onClick={buttonBackHandler}>
        Go back
      </button>
    </div>
  );
};

export default MovieDetails;
