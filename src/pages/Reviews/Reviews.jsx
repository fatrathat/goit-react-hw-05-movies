import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { axiosMovieReviews } from 'service/axiosAPI';

import ReviewsInfo from 'components/ReviewsInfo/ReviewsInfo';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axiosMovieReviews(movieId).then(({ results }) => {
      setReviews(results);
    });
  }, [movieId]);
  return (
    <>
      {reviews.length ? (
        <ReviewsInfo data={reviews} />
      ) : (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
};

export default Reviews;
