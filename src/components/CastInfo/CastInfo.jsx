import PropTypes from 'prop-types';

import def_img from '../../images/photo.jpg';
import styles from './style.module.css';

const URL = 'https://image.tmdb.org/t/p/w200/';

const CastInfo = ({ data }) => {
  return (
    <>
      <ul className={styles.CastInfoList}>
        {data.map(({ id, profile_path, name, character }) => {
          return (
            <li key={id}>
              <img
                className={styles.CastImg}
                src={profile_path ? URL + profile_path : def_img}
                alt={name}
              />

              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CastInfo;

CastInfo.propTypes = {
  data: PropTypes.array.isRequired,
};
