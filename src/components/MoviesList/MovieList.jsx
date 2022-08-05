import { Link } from 'react-router-dom';

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
