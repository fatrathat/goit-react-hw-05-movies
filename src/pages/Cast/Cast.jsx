import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { axiosMovieCredits } from 'service/axiosAPI';

import CastInfo from 'components/CastInfo/CastInfo';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    axiosMovieCredits(movieId).then(({ cast }) => {
      setCast(cast);
    });
  }, [movieId]);

  return <>{cast && <CastInfo data={cast} />}</>;
};

export default Cast;
