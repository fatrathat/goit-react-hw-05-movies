import PropTypes from 'prop-types';
import styles from './style.module.css';

const MovieInfo = ({ data }) => {
  const { poster_path, title, vote_average, overview, genres } = data;

  return (
    <div className={styles.MovieCard}>
      <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt={title} />
      <div className={styles.MovieInfo}>
        <h2>{title}</h2>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul className={styles.MovieInfoList}>
          {genres.map(({ id, name }) => {
            return (
              <li className={styles.MovieInfoListItem} key={id}>
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MovieInfo;

MovieInfo.propTypes = {
  data: PropTypes.object.isRequired,
};
