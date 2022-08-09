import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

AdditionalInfo.propTypes = {
  id: PropTypes.string.isRequired,
};
