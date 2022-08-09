import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ data }) => {
  return (
    <ul>
      {data.map(({ title, id }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  data: PropTypes.array.isRequired,
};
