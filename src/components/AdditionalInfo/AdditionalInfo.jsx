import { Link } from 'react-router-dom';

const AdditionalInfo = ({ id }) => {
  return (
    <>
      <p>Additional info</p>
      <ul>
        <li>
          <Link to={`/movies/${id}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${id}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </>
  );
};

export default AdditionalInfo;
